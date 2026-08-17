export default function Footer() {
  return (
    <footer className="border-t dark:border-slate-700">
      <div className="container py-6 text-sm text-slate-600 dark:text-slate-400 flex justify-between items-center">
        <div>© {new Date().getFullYear()} PRATAP SOLAT</div>
        <div>
          <a href="mailto:solatpratap@gmail.com" className="underline">solatpratap@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
