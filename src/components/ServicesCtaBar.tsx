import { Link } from 'react-router-dom'
import { PhoneIcon } from './Icons'

const linkBase =
  'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'

export default function ServicesCtaBar() {
  return (
    <>
      {/* Desktop: sticky on the right */}
      <aside
        className="hidden lg:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-30"
        aria-label="Quick actions"
      >
        <Link
          to="/contact"
          className={`${linkBase} bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 shadow-lg`}
        >
          Request Service
        </Link>
        <a
          href="tel:9166223439"
          className={`${linkBase} bg-accent-500 hover:bg-accent-600 text-primary-900 px-5 py-3 shadow-lg`}
        >
          <PhoneIcon className="w-5 h-5" />
          Call Now
        </a>
      </aside>

      {/* Mobile: fixed bottom bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-4 py-3"
        aria-label="Quick actions"
      >
        <div className="flex gap-3 max-w-lg mx-auto">
          <Link
            to="/contact"
            className={`${linkBase} flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3.5`}
          >
            Request Service
          </Link>
          <a
            href="tel:9166223439"
            className={`${linkBase} flex-1 bg-accent-500 hover:bg-accent-600 text-primary-900 py-3.5`}
          >
            <PhoneIcon className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </>
  )
}
