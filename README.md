# Ahmed Mohyeldin — Portfolio

A production-focused Next.js portfolio for Ahmed Mohyeldin, an IT and digital solutions specialist working across AI, web development, e-commerce, UI/UX, 3D and business automation.

## Stack

- Next.js App Router + TypeScript
- React 19
- React Three Fiber / Three.js
- Tailwind CSS 4
- GSAP / Lenis-ready interaction layer
- Vercel-ready deployment

## Features

- Responsive portfolio homepage
- Work filtering and case-study pages
- AI portfolio assistant with FAQ fallback
- Bounded chat history and API rate limiting
- Accessible reduced-3D mode
- SEO metadata, sitemap, robots and structured data
- Optimized remote project screenshots
- Project inquiry email flow and WhatsApp contact link

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validate

```bash
npm run typecheck
npm run build
```

The GitHub Actions workflow runs both checks on pushes to `main` and pull requests targeting `main`.

## Environment

The AI assistant can use the OpenAI API when `OPENAI_API_KEY` is configured. If the key is not available, the assistant falls back to the built-in FAQ responses.
