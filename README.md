# Pratap Solat — Developer Portfolio

A modern, internationally competitive developer portfolio engineered with **Next.js (Pages Router)**, **TypeScript**, and **Tailwind CSS**. Features dark-first editorial aesthetics, an interactive HTML5 canvas background, project case studies with an architectural modal, client-validated contact workflows, and a real-time portfolio AI assistant.

---

## ⚡ Key Highlights

- **Dark-First Studio Aesthetic**: Tailored color palette with electric indigo accents, clean borders, glass panels, and subtle ambient glows.
- **Interactive Canvas Mesh**: Lightweight, performance-friendly HTML5 canvas hero graphic with cursor interactivity and automatic pause on `prefers-reduced-motion`.
- **Structured Project Showcases**: Responsive project cards paired with a deep-dive case study modal detailing challenges, solutions, system architectures, and metrics.
- **Printable & Accessible Resume**: Complete CV layout with optimized print stylesheet (`window.print()`) and explicit placeholder notice for the PDF resume.
- **Validated Contact System**: Client-side validation, inline error hints, anti-spam honeypot, and 1-click clipboard contact copying.
- **Portfolio AI Assistant**: Chatbot grounded strictly in `data/portfolio.ts` with OpenAI API support and graceful runtime fallback to local FAQ matching when no API key is provided.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Theming**: `next-themes` (Dark-first with system/light toggle)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans, Fira Code, Inter

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed on your machine.
- npm, yarn, or pnpm.

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/solatpatil-08/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Local Development
```bash
# Run local dev server on http://localhost:3000
npm run dev
```

### 4. Production Build
```bash
# Build production bundle and run type checks
npm run build

# Start production server
npm start
```

---

## 🤖 Portfolio AI Chatbot Setup

The portfolio assistant in the bottom-right corner answers questions about Pratap's skills, experience, projects, and availability.

### Configuration
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
2. Add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-...
   # Optional: customize model (defaults to gpt-4o-mini)
   OPENAI_MODEL=gpt-4o-mini
   ```
3. **No API key? No problem:** If `OPENAI_API_KEY` is not provided, the chat route (`pages/api/chat.ts`) automatically and gracefully falls back to deterministic local keyword matching based on `data/portfolio.ts`.

---

## 📝 Personal Placeholders Checklist

Before deploying your personal live site, review and customize these items:

| Item | File Location | Purpose |
|------|---------------|---------|
| **Resume PDF** | `public/resume.pdf` | Replace the 124-byte placeholder with your real PDF document. |
| **Profile Photo** | `public/profile-photo.png` | Replace with your high-res headshot. |
| **Portfolio Data** | `data/portfolio.ts` | Update contact information, experience details, project links, and FAQs. |
| **OpenAI API Key** | `.env.local` / Vercel Env | Add your OpenAI key for live LLM chat generation. |
| **Direct Project Links** | `data/portfolio.ts` | Update GitHub repositories and live demo URLs for public projects. |

---

## 🌐 Deployment to Vercel

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Upgrade portfolio to premium digital studio experience"
   git push origin portfolio
   ```
2. Import the repository into [Vercel](https://vercel.com).
3. Under **Environment Variables**, add:
   - `OPENAI_API_KEY`: *(Optional)* Your OpenAI API Key.
   - `OPENAI_MODEL`: *(Optional)* `gpt-4o-mini`.
4. Click **Deploy**. Vercel will build and serve your portfolio globally on the Edge network.

---

## 📄 License

MIT © [Pratap Solat](https://github.com/solatpatil-08).
