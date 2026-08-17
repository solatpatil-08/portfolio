import Layout from '../components/Layout'

export default function Contact() {
  // Uses mailto fallback; Formspree action can be added if you create a formspree endpoint
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-3 text-slate-600">I'm based in Pune, India. Email me at <a href="mailto:solatpratap@gmail.com" className="underline">solatpratap@gmail.com</a> or call/WhatsApp at <strong>+91-9022961780</strong>.</p>

      <div className="mt-6 max-w-xl">
        <p className="text-sm text-slate-600">Or use the form below to send a message — replace the Formspree action with your endpoint when ready.</p>

        <form action="https://formspree.io/f/XXXXXXXX" method="POST" className="mt-4">
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
      </div>
    </Layout>
  )
}
