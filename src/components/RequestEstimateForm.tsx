import { useState, type FormEvent } from 'react'

const SERVICE_OPTIONS = [
  'Water Heater Services',
  'Plumbing Repair & Service',
  'Emergency Plumbing',
  'Residential Plumbing Construction',
  'Plumbing Fixtures Installation',
  'Garbage Disposal Solutions',
  'Toilet Repair & Installation',
  'Sewer & Drain Service',
  'Gas Line Services',
  'Other',
]

interface Props {
  /** Optional heading override */
  heading?: string
  /** Compact variant for sidebar usage */
  compact?: boolean
}

export default function RequestEstimateForm({
  heading = 'Request a Free Estimate',
  compact = false,
}: Props) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In production, wire this to an API endpoint or email service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-6 text-center ${compact ? '' : 'md:p-8'}`}>
        <div className="text-green-600 text-4xl mb-2">&#10003;</div>
        <h3 className="text-lg font-bold text-green-800 mb-1">Thank You!</h3>
        <p className="text-green-700 text-sm">
          We've received your request and will get back to you shortly. For immediate assistance,
          call us at{' '}
          <a href="tel:9166223439" className="font-semibold underline">
            (916) 622-3439
          </a>.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${compact ? 'p-5' : 'p-6 md:p-8'}`}
    >
      <h3 className={`font-bold text-primary-800 mb-4 ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
        {heading}
      </h3>

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <div className={compact ? '' : 'md:col-span-1'}>
          <label htmlFor="est-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="est-name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="est-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="est-phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition"
            placeholder="(916) 555-1234"
          />
        </div>

        <div className={compact ? '' : 'md:col-span-2'}>
          <label htmlFor="est-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="est-email"
            name="email"
            type="email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition"
            placeholder="you@email.com"
          />
        </div>

        <div className={compact ? '' : 'md:col-span-2'}>
          <label htmlFor="est-service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="est-service"
            name="service"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition bg-white"
          >
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className={compact ? '' : 'md:col-span-2'}>
          <label htmlFor="est-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="est-message"
            name="message"
            rows={compact ? 3 : 4}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition resize-y"
            placeholder="Describe your plumbing issue or project…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-lg transition-colors shadow-sm text-sm"
      >
        Request Free Estimate
      </button>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Or call us directly at{' '}
        <a href="tel:9166223439" className="text-primary-500 font-medium hover:underline">
          (916) 622-3439
        </a>
      </p>
    </form>
  )
}
