import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PhoneIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from './Icons'
import { SERVICES_DATA } from '../data/servicesContent'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isServicesPage = location.pathname === '/services'

  // Close desktop Services dropdown on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [servicesOpen])

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
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/about' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              About
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded ${
                  isServicesPage ? 'text-primary-500' : 'text-gray-700'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 top-full pt-2 min-w-[240px]"
                  role="menu"
                >
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                    {SERVICES_DATA.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services?type=${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/contact' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
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
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    location.pathname === '/' ? 'text-primary-500 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    location.pathname === '/about' ? 'text-primary-500 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className={`flex items-center justify-between w-full px-6 py-3 text-sm font-medium transition-colors text-left ${
                    isServicesPage ? 'text-primary-500 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <ul className="bg-gray-50 border-t border-gray-100">
                    {SERVICES_DATA.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services?type=${s.slug}`}
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileServicesOpen(false)
                          }}
                          className="block px-8 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    location.pathname === '/contact' ? 'text-primary-500 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </Link>
              </li>
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
