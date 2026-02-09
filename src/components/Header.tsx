import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PhoneIcon, Bars3Icon, XMarkIcon } from './Icons'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Top bar – emergency + hours */}
      <div className="bg-primary-800 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emergency animate-pulse" />
            24/7 Emergency Service Available
          </span>
          <span>Mon–Fri 8:30 AM – 4:30 PM &nbsp;|&nbsp; Sat by appointment</span>
        </div>
      </div>

      {/* Main sticky header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo / brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Jeff Boaze Plumbing home">
            <img
              src="/images/JeffB-Logo2.png"
              alt="Jeff Boaze Plumbing logo"
              className="h-12 md:h-14 w-auto"
              loading="eager"
            />
            <div className="leading-tight hidden sm:block">
              <span className="text-primary-700 font-bold text-lg md:text-xl tracking-tight">Jeff Boaze Plumbing</span>
              <span className="block text-[11px] text-gray-500 -mt-0.5">Never a Problem, Only a Solution</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  location.pathname === item.to ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Emergency badge – desktop */}
            <a
              href="tel:9166223439"
              className="hidden lg:inline-flex items-center gap-1.5 bg-emergency text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-red-700 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Emergency
            </a>

            {/* Call button – always visible */}
            <a
              href="tel:9166223439"
              className="inline-flex items-center gap-1.5 bg-primary-500 text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
              aria-label="Call (916) 622-3439"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">(916) 622-3439</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary-500"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t bg-white" aria-label="Mobile navigation">
            <ul className="divide-y">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium transition-colors ${
                      location.pathname === item.to
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:9166223439"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emergency"
                >
                  <span className="w-2 h-2 rounded-full bg-emergency animate-pulse" />
                  Emergency Service – Call Now
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
