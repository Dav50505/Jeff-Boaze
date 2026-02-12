import RequestEstimateForm from '../components/RequestEstimateForm'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '../components/Icons'
import Reveal from '../components/Reveal'

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '(916) 622-3439',
    href: 'tel:9166223439',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'jeffboazeplumbing@gmail.com',
    href: 'mailto:jeffboazeplumbing@gmail.com',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: '8932 Central Avenue, Orangevale, CA 95662',
    href: 'https://www.google.com/maps/search/?api=1&query=8932+Central+Avenue+Orangevale+CA+95662',
  },
  {
    icon: ClockIcon,
    label: 'Hours',
    value: 'Mon–Fri 8:30 AM – 4:30 PM\nSat by Appointment\nEmergency Service 24/7',
  },
]

const SERVICE_AREAS = [
  { name: 'Folsom', zip: '95630' },
  { name: 'Granite Bay', zip: '95746' },
  { name: 'El Dorado Hills', zip: '95762' },
  { name: 'Orangevale', zip: '95662' },
]

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-linear-to-br from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <Reveal className="site-container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-primary-200 text-lg max-w-2xl leading-relaxed">
            Ready to get your plumbing issue resolved? Call us, email us, or fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </Reveal>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24">
        <div className="site-container grid lg:grid-cols-5 gap-10">
          {/* Form – takes up 3 cols */}
          <Reveal className="lg:col-span-3" direction="left">
            <RequestEstimateForm heading="Send Us a Message" />
          </Reveal>

          {/* Info sidebar – 2 cols */}
          <Reveal className="lg:col-span-2 space-y-6" direction="right" delayMs={70}>
            {/* Quick call card */}
            <Reveal className="bg-primary-800 text-white rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Need Help Right Away?</h2>
              <p className="text-primary-200 text-sm mb-4">
                The fastest way to reach us is by phone. We're happy to discuss your plumbing needs.
              </p>
              <a
                href="tel:9166223439"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold px-6 py-3 rounded-lg transition-colors text-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                (916) 622-3439
              </a>
            </Reveal>

            {/* Contact details */}
            <Reveal className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-5" delayMs={70}>
              <h3 className="font-bold text-primary-800 text-lg">Contact Information</h3>
              {CONTACT_INFO.map((item, i) => (
                <Reveal key={item.label} className="flex items-start gap-3" delayMs={i * 70}>
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-700 font-medium hover:underline text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </Reveal>

            {/* Service areas */}
            <Reveal className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" delayMs={140}>
              <h3 className="font-bold text-primary-800 text-lg mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {SERVICE_AREAS.map((area, i) => (
                  <Reveal key={area.zip} delayMs={i * 70}>
                    <div className="bg-primary-50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-primary-800 text-sm">{area.name}</div>
                      <div className="text-xs text-gray-500">{area.zip}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Serving Sacramento County &amp; Placer County communities.
              </p>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* Map embed */}
      <section className="pb-0">
        <Reveal>
          <iframe
            title="Jeff Boaze Plumbing location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.5!2d-121.18!3d38.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s8932+Central+Avenue+Orangevale+CA+95662!5e0!3m2!1sen!2sus!4v1700000000000"
            className="w-full h-72 md:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </section>
    </>
  )
}
