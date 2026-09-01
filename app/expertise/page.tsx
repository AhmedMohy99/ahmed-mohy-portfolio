export const metadata = { title: 'Expertise' };

const areas = [
  ['BUILD', 'Software engineering, web applications, e-commerce, Shopify, WordPress, WooCommerce and automation.'],
  ['THINK', 'AI applications, chatbots, RAG, document intelligence, analytics, machine learning and lead generation.'],
  ['EXPERIENCE', 'UI/UX, product experience, 3D websites, Three.js, virtual try-on and immersive commerce.'],
  ['GROW', 'Performance marketing, targeting, conversion, analytics, content and e-commerce growth.'],
];

export default function ExpertisePage() {
  return <main className="page-shell"><a className="back-link" href="/">← Home</a><p className="eyebrow">EXPERTISE</p><h1>One digital partner. Multiple disciplines.</h1><div className="simple-grid">{areas.map(([title, text]) => <article key={title}><p className="eyebrow">{title}</p><p className="lead">{text}</p></article>)}</div></main>;
}
