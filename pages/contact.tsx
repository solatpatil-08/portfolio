import Layout from '../components/Layout'

export default function Contact() {
  // Replace action with your Formspree endpoint or use mailto
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-3 text-slate-600">Use the form or email me at <a href="mailto:you@example.com" className="underline">you@example.com</a></p>

      <form action="https://formspree.io/f/XXXXXXXX" method="POST" className="mt-6 max-w-xl">
        <label className="block">
          <span className="text-sm">Name</span>
          <input name="name" className="mt-1 block w-full border rounded px-3 py-2" required />
        </label>
        <label className="block mt-4">
          <span className="text-sm">Email</span>
          <input name="email" type="email" className="mt-1 block w-full border rounded px-3 py-2" required />
        </label>
        <label className="block mt-4">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={5} className="mt-1 block w-full border rounded px-3 py-2" required />
        </label>
        <button type="submit" className="mt-4 px-4 py-2 bg-brand-500 text-white rounded">Send</button>
      </form>
    </Layout>
  )
}
