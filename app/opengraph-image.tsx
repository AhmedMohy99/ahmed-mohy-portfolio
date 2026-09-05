import { ImageResponse } from 'next/og';

export const alt = 'Ahmed Mohy Eldin Abdrabbo — Software Engineer, AI & Digital Experience';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#f5f1e9',
          color: '#171613',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: '#777269' }}>
          AHMED MOHYELDIN · SOFTWARE · AI · DIGITAL EXPERIENCE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>I BUILD DIGITAL</div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>EXPERIENCES.</div>
          <div style={{ fontSize: 54, color: '#9b8055', fontStyle: 'italic', marginTop: 12 }}>That move business.</div>
        </div>
        <div style={{ fontSize: 20, letterSpacing: 4, color: '#777269' }}>
          WEB · AI · UI/UX · 3D · E-COMMERCE · GROWTH
        </div>
      </div>
    ),
    { ...size }
  );
}
