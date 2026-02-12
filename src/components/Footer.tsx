import { Link } from 'react-router-dom'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, WrenchScrewdriverIcon } from './Icons'

const REVIEW_LINKS = [
  { label: 'Yelp', href: 'https://www.yelp.com/biz/jeff-boaze-plumbing-folsom-8' },
  { label: 'Angi', href: 'https://www.angi.com/companylist/us/ca/folsom/jeff-boaze-plumbing-reviews-7426533.htm' },
  { label: 'Google', href: 'https://www.google.com/maps/search/?api=1&query=Jeff+Boaze+Plumbing+Orangevale+CA' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-gray-300">
      {/* CTA banner */}
      <div className="bg-primary-700">
        <div className="site-container py-8 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Ready to Solve Your Plumbing Problem?
          </h2>
          <p className="text-primary-200 mb-5">Call today for fast, reliable service from a 4th generation plumber.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:9166223439"
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              (916) 622-3439
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="site-container py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <WrenchScrewdriverIcon className="w-7 h-7 text-primary-400" />
            <span className="text-white font-bold text-lg">Jeff Boaze Plumbing</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            A 4th generation family-owned plumbing company proudly serving Folsom, Granite Bay,
            El Dorado Hills, and Orangevale for over 40 years.
          </p>
          <p className="text-xs italic text-primary-400">"Never a Problem, Only a Solution"</p>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <PhoneIcon className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
              <a href="tel:9166223439" className="hover:text-white transition-colors">(916) 622-3439</a>
            </li>
            <li className="flex items-start gap-2">
              <EnvelopeIcon className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
              <a href="mailto:jeffboazeplumbing@gmail.com" className="hover:text-white transition-colors">
                jeffboazeplumbing@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
              <span>8932 Central Avenue, Orangevale, CA 95662</span>
            </li>
          </ul>
        </div>

        {/* Hours & links */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Hours & Links</h3>
          <div className="text-sm space-y-1 mb-4">
            <p>Monday – Friday: 8:30 AM – 4:30 PM</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday: Closed</p>
            <p className="text-emergency font-medium mt-2">Emergency Service Available 24/7</p>
          </div>
          <div className="flex gap-3">
            {REVIEW_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-primary-800 hover:bg-primary-700 text-primary-300 hover:text-white px-3 py-1.5 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="site-container py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>&copy; {year} Jeff Boaze Plumbing, Inc. All rights reserved.</p>
          <p>CA License #1012513 &nbsp;|&nbsp; Fully Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  )
}
