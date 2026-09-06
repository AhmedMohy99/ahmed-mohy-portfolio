import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

type Language = 'en' | 'ar';
type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_MESSAGES = 8;
const MAX_REQUESTS_PER_WINDOW = 12;
const RATE_LIMIT_WINDOW_MS = 60_000;
const OPENAI_TIMEOUT_MS = 12_000;
const MODEL = process.env.OPENAI_MODEL || 'gpt-5.6-luna';
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) { return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous'; }
function isRateLimited(request: Request) { const now = Date.now(); const key = getClientKey(request); const current = rateLimit.get(key); if (!current || current.resetAt <= now) { rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS }); return false; } current.count += 1; return current.count > MAX_REQUESTS_PER_WINDOW; }

function faqReply(text: string, lang: Language) {
  const normalized = text.toLowerCase();
  if (['price', 'cost', 'how much', 'pricing', 'سعر', 'تكلفة', 'كم', 'بكام'].some((key) => normalized.includes(key))) return lang === 'ar' ? '💰 أقدر أبدأ معك من خلال عرض مخصص حسب نطاق المشروع. الخدمات تشمل مواقع الويب، المتاجر، تطبيقات الويب، AI والأتمتة.\n\nللتسعير الدقيق: ما هدف المشروع؟ ما المميزات المطلوبة؟ وما الموعد المستهدف؟' : '💰 I can prepare a tailored quote based on the project scope. Services include websites, e-commerce, web apps, AI and automation.\n\nFor an accurate quote: what is the goal, which features do you need, and what is your target deadline?';
  if (['service', 'services', 'offer', 'do you do', 'خدمة', 'الخدمات', 'بتقدم', 'تقدم'].some((key) => normalized.includes(key))) return lang === 'ar' ? '🤖 الخدمات:\n• تطوير مواقع وتطبيقات الويب\n• AI وChatbots وRAG والأتمتة\n• Shopify وWooCommerce\n• UI/UX وواجهات تفاعلية و3D\n• تحليل البيانات ولوحات المعلومات\n• تحسين المتاجر والمواقع والنمو' : '🤖 Services:\n• Websites and web applications\n• AI, chatbots, RAG and automation\n• Shopify and WooCommerce\n• UI/UX, interactive interfaces and 3D\n• Data analytics and dashboards\n• Website, e-commerce and growth optimisation';
  if (['contact', 'email', 'whatsapp', 'instagram', 'github', 'linkedin', 'تواصل', 'واتساب', 'بريد', 'لينكد'].some((key) => normalized.includes(key))) return lang === 'ar' ? `📩 البريد: ${site.email}\n📱 واتساب: ${site.whatsapp}\n📸 Instagram: ${site.instagram}\n🔗 LinkedIn: ${site.linkedin}\n💻 GitHub: ${site.github}` : `📩 Email: ${site.email}\n📱 WhatsApp: ${site.whatsapp}\n📸 Instagram: ${site.instagram}\n🔗 LinkedIn: ${site.linkedin}\n💻 GitHub: ${site.github}`;
  return lang === 'ar' ? 'مرحباً 👋 أنا مساعد أحمد. اسألني عن الخدمات أو المشاريع أو الأسعار أو طريقة التواصل.' : "Hi 👋 I'm Ahmed's portfolio assistant. Ask me about services, projects, pricing or contact.";
}

function jsonResponse(reply: string, mode: 'ai' | 'faq', status = 200) { return NextResponse.json({ reply, mode }, { status, headers: { 'Cache-Control': 'no-store' } }); }
function getLanguage(value: unknown): Language { return value === 'ar' ? 'ar' : 'en'; }

function sanitizeHistory(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is ChatMessage => Boolean(item) && typeof item === 'object' && (item as ChatMessage).role !== undefined && ((item as ChatMessage).role === 'user' || (item as ChatMessage).role === 'assistant') && typeof (item as ChatMessage).content === 'string').slice(-MAX_HISTORY_MESSAGES).map((item) => ({ role: item.role, content: item.content.trim().slice(0, MAX_MESSAGE_LENGTH) })).filter((item) => item.content);
}

export async function POST(request: Request) {
  let message = '';
  let lang: Language = 'en';
  try {
    if (isRateLimited(request)) return jsonResponse(lang === 'ar' ? 'تم الوصول إلى الحد المؤقت للطلبات. حاول مرة أخرى بعد دقيقة.' : 'Too many requests. Please try again in a minute.', 'faq', 429);
    if (!request.headers.get('content-type')?.includes('application/json')) return jsonResponse('Invalid request.', 'faq', 415);
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object') return jsonResponse('Invalid request.', 'faq', 400);
    const payload = body as { message?: unknown; lang?: unknown; messages?: unknown };
    message = typeof payload.message === 'string' ? payload.message.trim().slice(0, MAX_MESSAGE_LENGTH) : '';
    lang = getLanguage(payload.lang);
    const history = sanitizeHistory(payload.messages);
    if (!message) return jsonResponse(faqReply('', lang), 'faq');
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) return jsonResponse(faqReply(message, lang), 'faq');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);
    try {
      const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          input: [
            { role: 'system', content: `You are ${site.shortName}'s professional portfolio assistant. Answer in ${lang === 'ar' ? 'Arabic' : 'English'}. Be concise, helpful and accurate. ${site.shortName} builds websites, web apps, e-commerce stores, Shopify/WooCommerce experiences, AI applications, chatbots, RAG systems, data dashboards, automation, UI/UX and 3D experiences. For contact, use ${site.email}, ${site.whatsapp}, ${site.linkedin}, ${site.github}, or ${site.instagram}. Do not invent client results, prices, technologies or availability.` },
            ...history,
            { role: 'user', content: message },
          ],
        }),
        signal: controller.signal,
      });
      if (!response.ok) return jsonResponse(faqReply(message, lang), 'faq');
      const data: unknown = await response.json();
      const outputText = data && typeof data === 'object' && 'output_text' in data && typeof data.output_text === 'string' ? data.output_text.trim().slice(0, 4000) : '';
      return jsonResponse(outputText || faqReply(message, lang), outputText ? 'ai' : 'faq');
    } finally { clearTimeout(timeout); }
  } catch { return jsonResponse(faqReply(message, lang), 'faq'); }
}
