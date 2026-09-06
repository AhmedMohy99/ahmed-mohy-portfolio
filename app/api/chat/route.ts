import { NextResponse } from 'next/server';

const OWNER_NAME = 'Ahmed Mohy';
const EMAIL = 'Ahmed171684@gmail.com';
const WHATSAPP = '01016286261';
const WHATSAPP_LINK = 'https://wa.me/201016286261';
const INSTAGRAM = 'https://www.instagram.com/ahmed.abdrabboo/';
const GITHUB = 'https://github.com/AhmedMohy99';
const LINKEDIN = 'https://www.linkedin.com/in/ahmed-mohy-83b447220/';

function faqReply(text: string, lang: 'en' | 'ar') {
  const t = text.toLowerCase();

  if (['price', 'cost', 'how much', 'pricing', 'سعر', 'تكلفة', 'كم', 'بكام'].some((k) => t.includes(k))) {
    return lang === 'ar'
      ? `💰 أقدر أبدأ معك من خلال عرض مخصص حسب نطاق المشروع. الخدمات تشمل مواقع الويب، المتاجر، تطبيقات الويب، AI والأتمتة.\n\nللتسعير الدقيق: ما هدف المشروع؟ ما المميزات المطلوبة؟ وما الموعد المستهدف؟`
      : `💰 I can prepare a tailored quote based on the project scope. Services include websites, e-commerce, web apps, AI and automation.\n\nFor an accurate quote: what is the goal, which features do you need, and what is your target deadline?`;
  }

  if (['service', 'services', 'offer', 'do you do', 'خدمة', 'الخدمات', 'بتقدم', 'تقدم'].some((k) => t.includes(k))) {
    return lang === 'ar'
      ? '🤖 الخدمات:\n• تطوير مواقع وتطبيقات الويب\n• AI وChatbots وRAG والأتمتة\n• Shopify وWooCommerce\n• UI/UX وواجهات تفاعلية و3D\n• تحليل البيانات ولوحات المعلومات\n• تحسين المتاجر والمواقع والنمو'
      : '🤖 Services:\n• Websites and web applications\n• AI, chatbots, RAG and automation\n• Shopify and WooCommerce\n• UI/UX, interactive interfaces and 3D\n• Data analytics and dashboards\n• Website, e-commerce and growth optimisation';
  }

  if (['contact', 'email', 'whatsapp', 'instagram', 'github', 'linkedin', 'تواصل', 'واتساب', 'بريد', 'لينكد'].some((k) => t.includes(k))) {
    return lang === 'ar'
      ? `📩 البريد: ${EMAIL}\n📱 واتساب: ${WHATSAPP_LINK}\n🔗 LinkedIn: ${LINKEDIN}\n💻 GitHub: ${GITHUB}`
      : `📩 Email: ${EMAIL}\n📱 WhatsApp: ${WHATSAPP_LINK}\n🔗 LinkedIn: ${LINKEDIN}\n💻 GitHub: ${GITHUB}`;
  }

  return lang === 'ar'
    ? 'مرحباً 👋 أنا مساعد أحمد. اسألني عن الخدمات أو المشاريع أو الأسعار أو طريقة التواصل.'
    : "Hi 👋 I'm Ahmed's portfolio assistant. Ask me about services, projects, pricing or contact.";
}

export async function POST(request: Request) {
  let message = '';
  let lang: 'en' | 'ar' = 'en';

  try {
    const body = await request.json();
    message = String(body?.message ?? '').trim().slice(0, 2000);
    lang = body?.lang === 'ar' ? 'ar' : 'en';

    if (!message) return NextResponse.json({ reply: faqReply('', lang), mode: 'faq' });

    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) return NextResponse.json({ reply: faqReply(message, lang), mode: 'faq' });

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5-mini',
        input: [
          {
            role: 'system',
            content: `You are ${OWNER_NAME}'s professional portfolio assistant. Answer in ${lang === 'ar' ? 'Arabic' : 'English'}. Be concise, helpful and accurate. Ahmed builds websites, web apps, e-commerce stores, Shopify/WooCommerce experiences, AI applications, chatbots, RAG systems, data dashboards, automation, UI/UX and 3D experiences. For contact, use ${EMAIL}, ${WHATSAPP_LINK}, ${LINKEDIN}, ${GITHUB}, or ${INSTAGRAM}. Do not invent client results, prices, technologies or availability.`,
          },
          { role: 'user', content: message },
        ],
        temperature: 0.4,
      }),
    });

    if (!response.ok) return NextResponse.json({ reply: faqReply(message, lang), mode: 'faq' });

    const data = await response.json();
    const reply = data.output_text || data.output?.flatMap((item: { content?: { text?: string }[] }) => item.content || []).map((part) => part.text || '').join('') || faqReply(message, lang);
    return NextResponse.json({ reply, mode: 'ai' });
  } catch {
    return NextResponse.json({ reply: faqReply(message, lang), mode: 'faq' });
  }
}
