import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { LanguageSwitcher } from '@/components/language-switcher';
import { content } from '@/locales/content';
import { site } from '@/lib/site';

const siteUrl = site.url;
const enKeywords = ['Ahmed Mohy Eldin Abdrabbo','Ahmed Mohyeldin','IT specialist Egypt','AI developer Egypt','web developer Cairo','website design Cairo','website development Egypt','UI UX designer Egypt','Shopify developer Egypt','ecommerce website developer','AI web development','Next.js developer Egypt','React developer Egypt','Three.js developer'];
const arKeywords = ['أحمد محي الدين عبد ربه','أحمد محي الدين','متخصص تقنية المعلومات مصر','تطوير الذكاء الاصطناعي مصر','تطوير مواقع القاهرة','تصميم مواقع مصر','تصميم UI UX','تطوير Shopify مصر','تطوير التجارة الإلكترونية','تطوير الويب بالذكاء الاصطناعي'];

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('ahmed-language')?.value === 'ar' ? 'ar' : 'en';
  const ar = locale === 'ar';
  const title = ar ? 'أحمد محي الدين عبد ربه | حلول تقنية ورقمية' : 'Ahmed Mohy Eldin Abdrabbo | IT & Digital Solutions';
  const description = ar ? 'حلول تقنية وتطوير مواقع وذكاء اصطناعي وتجارة إلكترونية وتصميم UI/UX وتجارب رقمية ثلاثية الأبعاد بواسطة أحمد محي الدين عبد ربه.' : 'IT, web development, AI, e-commerce, UI/UX and 3D digital experiences by Ahmed Mohy Eldin Abdrabbo.';
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: ar ? `%s | أحمد محي الدين عبد ربه` : `%s | Ahmed Mohy Eldin Abdrabbo` },
    description, keywords: ar ? arKeywords : enKeywords,
    authors: [{ name: site.name, url: siteUrl }], creator: site.name, publisher: site.name, category: 'technology',
    alternates: { canonical: siteUrl, languages: { en: `${siteUrl}/?lang=en`, ar: `${siteUrl}/?lang=ar`, 'x-default': siteUrl } },
    icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }], shortcut: ['/icon.svg'], apple: [{ url: '/icon.svg' }] },
    openGraph: { title, description, type: 'website', siteName: site.name, url: siteUrl, locale: ar ? 'ar_EG' : 'en_US', alternateLocale: ar ? ['en_US'] : ['ar_EG'], images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: ar ? 'أحمد محي الدين عبد ربه — حلول تقنية ورقمية' : 'Ahmed Mohy Eldin Abdrabbo — IT, AI & Digital Solutions' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('ahmed-language')?.value === 'ar' ? 'ar' : 'en';
  const ar = locale === 'ar';
  const person = { '@context':'https://schema.org','@type':'Person','@id':`${siteUrl}/#person`,name:site.name,alternateName:['Ahmed Mohyeldin','Ahmed Mohy'],jobTitle:ar?'متخصص حلول تقنية ورقمية':'IT & Digital Solutions Specialist',description:ar?'حلول تقنية وتطوير مواقع وذكاء اصطناعي وتجارة إلكترونية وتصميم UI/UX وتجارب رقمية ثلاثية الأبعاد.':site.description,url:siteUrl,image:`${siteUrl}/opengraph-image`,address:{'@type':'PostalAddress',addressLocality:'Cairo',addressCountry:'EG'},knowsAbout:ar?['تقنية المعلومات','الذكاء الاصطناعي','تصميم المواقع','تطوير المواقع','إعادة تصميم المواقع','تصميم UI/UX','التجارة الإلكترونية','Shopify','WordPress','WooCommerce','Next.js','React','Three.js','أتمتة الأعمال']:['Information Technology','Artificial Intelligence','Website Design','Website Development','Website Redesign','UI/UX Design','E-commerce','Shopify','WordPress','WooCommerce','Next.js','React','Three.js','Business Automation'],sameAs:[site.github,site.linkedin,site.instagram,site.linktree] };
  const website = { '@context':'https://schema.org','@type':'WebSite','@id':`${siteUrl}/#website`,name:site.name,alternateName:ar?'معرض أعمال أحمد محي الدين عبد ربه':'Ahmed Mohy Eldin Abdrabbo Portfolio',url:siteUrl,description:ar?'حلول تقنية ورقمية وتطوير مواقع وذكاء اصطناعي وتجارة إلكترونية.':site.description,publisher:{'@id':`${siteUrl}/#person`},inLanguage:ar?'ar-EG':'en-US'};
  const professionalService = { '@context':'https://schema.org','@type':'ProfessionalService','@id':`${siteUrl}/#professional-service`,name:ar?'أحمد محي الدين عبد ربه — حلول تقنية ورقمية':'Ahmed Mohy Eldin Abdrabbo — IT & Digital Solutions',url:siteUrl,description:ar?'خدمات تقنية المعلومات وتصميم وتطوير وإعادة تصميم المواقع وShopify والتجارة الإلكترونية والذكاء الاصطناعي وUI/UX والويب ثلاثي الأبعاد.':'IT services, website design, development, redesign, Shopify, e-commerce, AI web development, UI/UX and 3D web experiences.',provider:{'@id':`${siteUrl}/#person`},areaServed:[{'@type':'Country',name:'Egypt'},{'@type':'Place',name:'Worldwide'}],serviceType:ar?['تقنية المعلومات','تصميم المواقع','تطوير المواقع','إعادة تصميم المواقع','تطوير Shopify','تطوير التجارة الإلكترونية','تطوير الويب بالذكاء الاصطناعي','تصميم UI/UX','تطوير الويب ثلاثي الأبعاد','أتمتة الأعمال']:['Information Technology','Website Design','Website Development','Website Redesign','Shopify Development','E-commerce Development','AI Web Development','UI/UX Design','3D Web Development','Business Automation']};

  return <html lang={ar ? 'ar' : 'en'} dir={ar ? 'rtl' : 'ltr'} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html:`(() => { try { const q=new URLSearchParams(location.search).get('lang'); if(q==='ar'||q==='en'){localStorage.setItem('ahmed-language',q);document.cookie='ahmed-language='+q+'; Path=/; Max-Age=31536000; SameSite=Lax';} const lang=localStorage.getItem('ahmed-language')==='ar'?'ar':'en'; document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; } catch(_){} })();` }} /></head><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(professionalService)}}/><script async src="https://js.hs-scripts.com/149287248.js"/><a className="skip-link" href="#top">{content[locale]['Skip to main content']}</a><LanguageSwitcher/>{children}</body></html>;
}
