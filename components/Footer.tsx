export default function Footer() {
  return (
    <footer className="border-t dark:border-slate-700">
      <div className="container py-6 text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Your Name — Built with Next.js · <a href="https://vercel.com" className="underline">Vercel</a>
      </div>
    </footer>
  )
}
