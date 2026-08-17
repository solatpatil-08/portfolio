# Portfolio (Next.js + TypeScript + Tailwind)

Professional portfolio scaffold.

Quick start:
1. Install
   - npm install
2. Run locally
   - npm run dev
3. Build
   - npm run build
   - npm start

Replace placeholders in pages/ and components/:
- Your name, tagline, bio, projects, resume.pdf (public/resume.pdf), Formspree endpoint, plausible domain.

Plausible:
- Uncomment and set data-domain in pages/_document.tsx to your domain to enable analytics.

Contact form:
- Create a Formspree form and replace the action URL in pages/contact.tsx.

Deploy to Vercel:
1. Push this repo to GitHub (if not already):
   git init
   git add .
   git commit -m "Initial portfolio scaffold"
   git branch -M main
   git remote add origin git@github.com:solatpatil-08/portfolio.git
   git push -u origin main

2. In Vercel:
   - Import from GitHub (select your repo)
   - Set environment variables if needed (e.g., PLAUSIBLE_DOMAIN)
   - Deploy; Vercel gives you a demo URL.

I created a branch named `portfolio` with the scaffold. Replace placeholders with your real content and I can open a PR to merge into `main` when you're ready.
