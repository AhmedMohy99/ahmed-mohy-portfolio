import { site } from '@/lib/site';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main className="page-shell">
      <a className="back-link" href="/">← Home</a>
      <p className="eyebrow">THE PERSON BEHIND THE BUILD</p>
      <h1>I build at the intersection of software, AI, experience and growth.</h1>
      <p className="lead">{site.description}</p>
      <div className="simple-grid"><span>Software Engineering</span><span>AI & Data</span><span>UI/UX & 3D</span><span>E-Commerce & Growth</span></div>
    </main>
  );
}
