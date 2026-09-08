'use client';

import { useEffect } from 'react';

const translations: Record<string, string> = {
  Home: 'الرئيسية', Work: 'الأعمال', Services: 'الخدمات', About: 'نبذة عني', 'AI Sales Lab': 'مختبر مبيعات الذكاء الاصطناعي', Contact: 'تواصل',
  'Explore Home': 'استكشف الرئيسية', 'Explore Work': 'استكشف الأعمال', 'Explore Services': 'استكشف الخدمات', 'Explore About': 'استكشف نبذة عني', 'Explore AI Sales Lab': 'استكشف مختبر مبيعات الذكاء الاصطناعي', 'Explore Contact': 'استكشف التواصل',
  'Start a project': 'ابدأ مشروعًا', 'Try the AI Sales Lab': 'جرّب مختبر مبيعات الذكاء الاصطناعي', 'Talk to the live agent': 'تحدث مع الوكيل المباشر', 'Open AI Sales Lab': 'افتح مختبر مبيعات الذكاء الاصطناعي', 'Start a conversation': 'ابدأ محادثة', 'Scroll to explore': 'مرّر للاستكشاف',
  'Cairo, Egypt · Available for selected projects': 'القاهرة، مصر · متاح لمشاريع مختارة', 'About · Ahmed Mohyeldin': 'نبذة · أحمد محي الدين',
  'I BUILD DIGITAL': 'أبني تجارب رقمية', EXPERIENCES: 'تغيّر', 'THAT MOVE BUSINESS.': 'الأعمال إلى الأمام.', 'Built to create.': 'صُمّم للإبداع.', BUILT: 'مبني', 'TO CREATE.': 'للإبداع.',
  Focus: 'التركيز', 'AI & automation': 'الذكاء الاصطناعي والأتمتة', 'Premium web experiences': 'تجارب ويب متقدمة', '3D & interactive commerce': 'تجارة تفاعلية ثلاثية الأبعاد', 'Shopify & e-commerce': 'Shopify والتجارة الإلكترونية', 'UI/UX & product design': 'تصميم UI/UX والمنتجات',
  Approach: 'المنهج', Perspective: 'الرؤية', 'Based in': 'الموقع', Capabilities: 'القدرات', 'AI & data': 'الذكاء الاصطناعي والبيانات', 'I BUILD': 'أبني', 'WITH AI.': 'بالذكاء الاصطناعي.', '3D experience': 'تجربة ثلاثية الأبعاد', 'Interactive commerce': 'تجارة تفاعلية', 'THE DIGITAL': 'غرفة', 'FITTING ROOM.': 'القياس الرقمية.', 'How I work': 'كيف أعمل', 'FROM IDEA': 'من الفكرة', 'TO IMPACT.': 'إلى التأثير.', 'SOMETHING.': 'شيئًا مميزًا.',
  'IT · AI · UI/UX · 3D · E-COMMERCE': 'تقنية · ذكاء اصطناعي · UI/UX · ثلاثي الأبعاد · تجارة إلكترونية', 'IT · AI · UI/UX · 3D · E-commerce': 'تقنية · ذكاء اصطناعي · UI/UX · ثلاثي الأبعاد · تجارة إلكترونية',
  '3D on': 'ثلاثي الأبعاد مفعّل', '3D off': 'ثلاثي الأبعاد متوقف', Off: 'متوقف', On: 'مفعّل', '3D experience: Off': 'تجربة ثلاثية الأبعاد: متوقفة', '3D experience: On': 'تجربة ثلاثية الأبعاد: مفعّلة', 'Close menu': 'إغلاق القائمة', 'Open menu': 'فتح القائمة', 'Switch language': 'تغيير اللغة', 'Switch between English and Arabic': 'التبديل بين الإنجليزية والعربية',
  'Selected work': 'أعمال مختارة', PROJECTS: 'المشاريع', 'Real projects, real interfaces and digital systems built for real businesses.': 'مشاريع حقيقية وواجهات حقيقية وأنظمة رقمية مبنية لأعمال حقيقية.', 'No projects match this category yet.': 'لا توجد مشاريع مطابقة لهذه الفئة حتى الآن.',
  'All work': 'كل الأعمال', 'Full-Stack & AI': 'تطوير شامل وذكاء اصطناعي', 'E-commerce': 'التجارة الإلكترونية', '3D & Web Graphics': 'ثلاثي الأبعاد ورسومات الويب', 'Filter projects': 'تصفية المشاريع',
  'Software Engineering': 'هندسة البرمجيات', 'AI & Data': 'الذكاء الاصطناعي والبيانات', 'AI Sales Automation': 'أتمتة المبيعات بالذكاء الاصطناعي', 'UI/UX & 3D': 'UI/UX وثلاثي الأبعاد', 'Marketing & Commerce': 'التسويق والتجارة', 'Web Development': 'تطوير الويب', 'E-commerce & Shopify': 'التجارة الإلكترونية وShopify', 'Data Management': 'إدارة البيانات', 'Website Redesign': 'إعادة تصميم المواقع', 'Business Growth': 'نمو الأعمال',
  BUILD: 'بناء', INTELLIGENCE: 'ذكاء', CONVERT: 'تحويل', EXPERIENCE: 'تجربة', GROW: 'نمو', WEB: 'ويب', COMMERCE: 'تجارة', DATA: 'بيانات', OPTIMIZE: 'تحسين',
  'Websites, web apps, APIs, e-commerce, Shopify, WordPress, WooCommerce and business automation.': 'مواقع الويب وتطبيقات الويب وواجهات API والتجارة الإلكترونية وShopify وWordPress وWooCommerce وأتمتة الأعمال.',
  'AI applications, chatbots, RAG, document intelligence, analytics, automation and intelligent workflows.': 'تطبيقات الذكاء الاصطناعي وروبوتات المحادثة وRAG وذكاء المستندات والتحليلات والأتمتة وسير العمل الذكي.',
  'AI agents for lead capture, qualification, product guidance, appointment booking, follow-up and human handoff.': 'وكلاء ذكاء اصطناعي لجمع العملاء المحتملين وتأهيلهم وإرشادهم للمنتجات وحجز المواعيد والمتابعة والتحويل إلى موظف بشري.',
  'Luxury interfaces, product experiences, Three.js, 3D websites, virtual try-on and interactive commerce.': 'واجهات فاخرة وتجارب منتجات وThree.js ومواقع ثلاثية الأبعاد وتجارب القياس الافتراضي والتجارة التفاعلية.',
  'Product photography direction, targeting, conversion, analytics, data entry and e-commerce growth.': 'توجيه تصوير المنتجات والاستهداف والتحويل والتحليلات وإدخال البيانات ونمو التجارة الإلكترونية.',
  'Next.js and React builds engineered for speed, accessibility and long-term maintainability.': 'مواقع مبنية باستخدام Next.js وReact مع التركيز على السرعة وإمكانية الوصول وسهولة الصيانة على المدى الطويل.',
  'Shopify, WooCommerce and custom commerce builds focused on product presentation and checkout clarity.': 'متاجر Shopify وWooCommerce وحلول تجارة مخصصة تركز على عرض المنتجات ووضوح عملية الدفع.',
  'Data entry, cleanup and structuring so decisions are made on information you can actually trust.': 'إدخال البيانات وتنظيفها وتنظيمها حتى تُبنى القرارات على معلومات موثوقة.',
  'Audits of existing sites — UX, performance and conversion — followed by focused improvements.': 'مراجعة المواقع الحالية من حيث تجربة المستخدم والأداء والتحويل، ثم تنفيذ تحسينات مركزة.',
  'Connecting the technical build to the commercial goal, so the site is judged by what it earns, not just how it looks.': 'ربط الحل التقني بالهدف التجاري حتى يتم تقييم الموقع بما يحققه للأعمال، وليس بمظهره فقط.',
  'Conversational assistants, document intelligence, analytics, automation and lead-generation systems designed around practical business use.': 'مساعدات محادثة وذكاء مستندات وتحليلات وأتمتة وأنظمة لتوليد العملاء المحتملين مصممة لاستخدامات عملية في الأعمال.',
  'Interactive product experiences, virtual try-on concepts and 3D interfaces that bring physical product exploration into the browser.': 'تجارب منتجات تفاعلية ومفاهيم للقياس الافتراضي وواجهات ثلاثية الأبعاد تنقل استكشاف المنتجات إلى المتصفح.',
  'Technology is the foundation; design, data and growth turn it into a business asset.': 'التقنية هي الأساس؛ والتصميم والبيانات والنمو يحولونها إلى أصل حقيقي للأعمال.', 'Build with intention. Keep the interface clear. Make every interaction earn its place.': 'ابنِ بهدف واضح. حافظ على وضوح الواجهة. اجعل لكل تفاعل قيمة حقيقية.', 'Cairo, Egypt · Working with ambitious brands and teams.': 'القاهرة، مصر · أعمل مع علامات تجارية وفرق طموحة.',
  Discover: 'اكتشاف', Design: 'تصميم', Build: 'بناء', Grow: 'نمو',
  'Understand the brand, the product and the business problem before any design starts.': 'فهم العلامة التجارية والمنتج ومشكلة العمل قبل بدء أي تصميم.', 'Map the experience — architecture, UX and visual direction — grounded in how customers actually behave.': 'تخطيط التجربة — البنية وتجربة المستخدم والاتجاه البصري — بناءً على سلوك العملاء الفعلي.', 'Engineer the product on a fast, accessible, maintainable foundation.': 'تطوير المنتج على أساس سريع وسهل الوصول وقابل للصيانة.', 'Optimise, market and refine after launch, so the site keeps earning its keep.': 'تحسين الموقع وتسويقه وتطويره بعد الإطلاق حتى يستمر في تحقيق القيمة.',
  'AI Customer Support': 'دعم العملاء بالذكاء الاصطناعي', 'Conversational AI for customer experience': 'ذكاء اصطناعي محادثي لتجربة العملاء', 'AI Sales Agents': 'وكلاء مبيعات بالذكاء الاصطناعي', 'Lead capture · qualification · booking · handoff': 'جمع العملاء · التأهيل · الحجز · التحويل', 'AI Document Assistant': 'مساعد مستندات بالذكاء الاصطناعي', 'RAG · document intelligence · knowledge retrieval': 'RAG · ذكاء المستندات · استرجاع المعرفة', 'Data Analytics': 'تحليلات البيانات', 'Business intelligence for clearer decisions': 'ذكاء الأعمال لاتخاذ قرارات أوضح', 'Automation Systems': 'أنظمة الأتمتة', 'Python workflows that remove repetitive work': 'سير عمل Python لإزالة المهام المتكررة', 'Lead Generation': 'توليد العملاء المحتملين', 'Data, prospecting and growth automation': 'البيانات واستكشاف العملاء وأتمتة النمو',
  'LARO Cosmetics': 'LARO Cosmetics', 'Beauty · Shopify': 'جمال · Shopify', 'Saffa Fashion': 'Saffa Fashion', 'Fashion · Web': 'أزياء · ويب', 'ZREX': 'ZREX', 'Fashion · Commerce': 'أزياء · تجارة', 'SWAY Maverick': 'SWAY Maverick', 'Fashion · Brand experience': 'أزياء · تجربة العلامة التجارية', 'UCYPTA': 'UCYPTA', 'Shopify · Storefront': 'Shopify · متجر إلكتروني', Elprof10: 'Elprof10', 'Digital experience': 'تجربة رقمية', 'Royal Watch': 'Royal Watch', 'Luxury · Product presentation': 'فخامة · عرض المنتجات', 'We Wave Agency': 'We Wave Agency', 'Agency · Portfolio': 'وكالة · معرض أعمال', 'IRIS Contemporary Womenswear': 'IRIS للأزياء النسائية المعاصرة', 'Luxury fashion · E-commerce': 'أزياء فاخرة · تجارة إلكترونية',
  'Shopify development · UI/UX · Conversion': 'تطوير Shopify · UI/UX · التحويل', 'Web development · UI/UX · E-commerce': 'تطوير الويب · UI/UX · التجارة الإلكترونية', 'Web · E-commerce · Product experience': 'ويب · تجارة إلكترونية · تجربة المنتج', 'E-commerce · Product experience · Brand presentation': 'تجارة إلكترونية · تجربة المنتج · عرض العلامة التجارية', 'Shopify · Storefront · UI/UX': 'Shopify · متجر إلكتروني · UI/UX', 'Web development · UI/UX': 'تطوير الويب · UI/UX', 'Luxury e-commerce · Product presentation': 'تجارة إلكترونية فاخرة · عرض المنتجات', 'Web development · UI/UX · Brand experience': 'تطوير الويب · UI/UX · تجربة العلامة التجارية', 'Website audit · UI/UX · E-commerce · Conversion': 'تدقيق الموقع · UI/UX · التجارة الإلكترونية · التحويل',
  'Shopify build': 'تطوير Shopify', 'UI/UX design': 'تصميم UI/UX', 'Storefront UX': 'تجربة المتجر', 'Product merchandising': 'تنسيق وعرض المنتجات', 'Conversion review': 'مراجعة التحويل', 'Next.js build': 'تطوير Next.js', 'Responsive UX': 'تجربة مستخدم متجاوبة', 'Product gallery UI': 'واجهة معرض المنتجات', 'Cart experience': 'تجربة سلة التسوق', 'E-commerce build': 'تطوير التجارة الإلكترونية', 'Product UI': 'واجهة المنتج', 'Responsive design': 'تصميم متجاوب', 'Brand presentation': 'عرض العلامة التجارية', 'Product storytelling': 'سرد قصة المنتج', 'Shopify store setup': 'إعداد متجر Shopify', 'Product UX': 'تجربة المنتج', 'Navigation design': 'تصميم التنقل', 'Web development': 'تطوير الويب', 'Performance review': 'مراجعة الأداء', 'Luxury UI': 'واجهة فاخرة', 'Visual hierarchy': 'التسلسل البصري', 'Portfolio experience': 'تجربة معرض الأعمال', 'UX audit': 'تدقيق تجربة المستخدم', 'E-commerce optimization': 'تحسين التجارة الإلكترونية',
  'A beauty commerce storefront rebuilt around product clarity — cleaner navigation, faster browsing and a shopping journey that respects the product.': 'متجر تجميل أُعيد بناؤه حول وضوح المنتجات، مع تنقل أبسط وتصفح أسرع وتجربة شراء تبرز قيمة المنتج.',
  'A fashion storefront built product-first, with responsive galleries and a cart experience designed for mobile shoppers.': 'متجر أزياء مبني حول المنتج أولًا، مع معارض متجاوبة وتجربة سلة مصممة لمستخدمي الهاتف.',
  'Fashion commerce and product experience work focused on a clear path from discovery to purchase.': 'تجربة تجارة وأزياء تركز على مسار واضح من اكتشاف المنتج حتى الشراء.',
  'A fashion commerce experience that ties brand storytelling directly to the product grid, so browsing feels like reading a lookbook.': 'تجربة تجارة للأزياء تربط قصة العلامة التجارية مباشرة بشبكة المنتجات، لتصبح عملية التصفح مثل تصفح كتالوج أزياء.',
  'A Shopify storefront foundation with product-led navigation and a streamlined shopping interface.': 'أساس متجر Shopify مع تنقل يركز على المنتجات وواجهة تسوق مبسطة.',
  'Digital product and web experience work focused on usability, presentation and a modern responsive interface.': 'عمل على المنتجات الرقمية وتجارب الويب يركز على سهولة الاستخدام والعرض وواجهة حديثة متجاوبة.',
  'A luxury watch brand experience focused on premium product presentation, visual storytelling and a polished online shopping journey.': 'تجربة رقمية لعلامة ساعات فاخرة تركز على عرض المنتجات بأسلوب راقٍ وسرد بصري ورحلة تسوق متقنة.',
  'A brand experience and agency portfolio designed to present work with a stronger visual hierarchy and a more confident digital identity.': 'تجربة علامة تجارية ومعرض أعمال لوكالة مصمم لعرض المشاريع بتسلسل بصري أقوى وهوية رقمية أكثر ثقة.',
  'A quiet-luxury womenswear experience reshaped around premium presentation, clearer navigation and a stronger path to checkout.': 'تجربة أزياء نسائية بطابع الفخامة الهادئة أُعيد تشكيلها حول عرض راقٍ وتنقل أوضح ومسار أقوى نحو الدفع.',
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, ar]) => [ar, en]));

function translateText(value: string, arabic: boolean) {
  if (!value.trim()) return value;
  const source = arabic ? reverseTranslations : translations;
  let result = value;
  const entries = Object.entries(source).sort(([a], [b]) => b.length - a.length);
  for (const [from, to] of entries) result = result.split(from).join(to);
  return result;
}

function translateAttributes(element: Element, arabic: boolean) {
  ['aria-label', 'title', 'placeholder', 'alt'].forEach((name) => {
    const value = element.getAttribute(name);
    if (value) element.setAttribute(name, translateText(value, arabic));
  });
}

function translatePage(arabic: boolean) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) nodes.push(node as Text);
  nodes.forEach((text) => {
    const parent = text.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return;
    text.nodeValue = translateText(text.nodeValue || '', arabic);
  });
  document.querySelectorAll('[aria-label],[title],[placeholder],[alt]').forEach((el) => translateAttributes(el, arabic));
  document.documentElement.lang = arabic ? 'ar' : 'en';
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', arabic);
}

export function BilingualSite() {
  useEffect(() => {
    const saved = window.localStorage.getItem('ahmed-language');
    const arabic = saved === 'ar';
    document.documentElement.lang = arabic ? 'ar' : 'en';
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', arabic);

    const style = document.createElement('style');
    style.id = 'arabic-rtl-styles';
    style.textContent = `
      html[dir='rtl'] body { direction: rtl; text-align: right; }
      html[dir='rtl'] .site-nav .container, html[dir='rtl'] .site-nav nav { direction: rtl; }
      html[dir='rtl'] .hero-title, html[dir='rtl'] .section-title, html[dir='rtl'] .display { text-align: right; }
      html[dir='rtl'] .hero-copy, html[dir='rtl'] .service-card, html[dir='rtl'] .price-card, html[dir='rtl'] .contact-form { text-align: right; }
      html[dir='rtl'] .border-l { border-left: 0; border-right: 1px solid var(--line-strong); padding-left: 0; padding-right: 1.5rem; }
      html[dir='rtl'] .md\\:border-r { border-right: 0; border-left: 1px solid var(--line); }
      html[dir='rtl'] .md\\:last\\:border-r-0:last-child { border-left: 0; }
      html[dir='rtl'] .site-nav .group-hover\\:block { direction: rtl; }
      html[dir='rtl'] input, html[dir='rtl'] textarea, html[dir='rtl'] select { text-align: right; direction: rtl; }
      html[dir='rtl'] .btn, html[dir='rtl'] button { direction: rtl; }
      html[dir='rtl'] .floating-nav { direction: rtl; }
      html[dir='rtl'] .work-number { left: auto; right: 1rem; }
      html[dir='rtl'] footer { text-align: center; }
      html[dir='rtl'] .project-card { direction: rtl; text-align: right; }
      html[dir='rtl'] .project-card img { direction: ltr; }
    `;
    document.head.appendChild(style);

    const translateAdded = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        root.textContent = translateText(root.textContent || '', arabic);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const element = root as Element;
      translateAttributes(element, arabic);
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      let current: Node | null;
      while ((current = walker.nextNode())) textNodes.push(current as Text);
      textNodes.forEach((text) => { text.nodeValue = translateText(text.nodeValue || '', arabic); });
      element.querySelectorAll('[aria-label],[title],[placeholder],[alt]').forEach((el) => translateAttributes(el, arabic));
    };

    const observer = new MutationObserver((mutations) => {
      if (!document.body.classList.contains('rtl') || !arabic) return;
      mutations.forEach((mutation) => mutation.addedNodes.forEach(translateAdded));
    });
    observer.observe(document.body, { childList: true, subtree: true });

    if (arabic) translatePage(true);
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: arabic ? 'ar' : 'en' }));

    return () => { observer.disconnect(); style.remove(); };
  }, []);

  return null;
}

export function togglePortfolioLanguage() {
  const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
  window.localStorage.setItem('ahmed-language', next);
  window.location.reload();
}
