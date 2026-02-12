import { Link } from 'react-router-dom'
import type { ComponentType } from 'react'
import RequestEstimateForm from '../components/RequestEstimateForm'
import Reveal from '../components/Reveal'
import { SERVICES_DATA, type ServiceSlug } from '../data/servicesContent'
import {
  PhoneIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  BoltIcon,
  CheckCircleIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  CogIcon,
  MapPinIcon,
} from '../components/Icons'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SERVICE_ICON_BY_SLUG: Record<ServiceSlug, ComponentType<{ className?: string }>> = {
  'residential-plumbing-construction': HomeModernIcon,
  'plumbing-services-repair-replacement': WrenchScrewdriverIcon,
  'plumbing-fixture-installation': CogIcon,
  'water-heater': FireIcon,
  'tankless-water-heaters': BoltIcon,
  'gas-line-services': FireIcon,
  'garbage-disposal-solutions': CheckCircleIcon,
  'toilet-repair-installation': ShieldCheckIcon,
}

const SERVICE_CARD_DESCRIPTION_BY_SLUG: Record<ServiceSlug, string> = {
  'residential-plumbing-construction':
    'New construction and remodel plumbing with code-compliant planning, rough-in, and finish work.',
  'plumbing-services-repair-replacement':
    'Expert repairs and replacements for water, sewer, gas, and whole-home plumbing systems.',
  'plumbing-fixture-installation':
    'Professional installation and replacement of sinks, faucets, showers, tubs, and kitchen fixtures.',
  'water-heater':
    'Water heater repair, replacement, and installation for reliable hot water every day.',
  'tankless-water-heaters':
    'On-demand tankless water heater solutions designed for efficiency, performance, and long-term savings.',
  'gas-line-services':
    'Safe gas line installation, line extensions, appliance hookups, and leak diagnostics for dependable home performance.',
  'garbage-disposal-solutions':
    'Garbage disposal troubleshooting, repair, and replacement to keep your kitchen running smoothly.',
  'toilet-repair-installation':
    'Toilet diagnostics, repair, and new installation to stop leaks, clogs, and constant running.',
}

const WHY_US = [
  { icon: UserGroupIcon, title: '4th Generation Family Business', desc: 'Plumbing excellence passed down through four generations of the Boaze family.' },
  { icon: ClockIcon, title: '40+ Years Experience', desc: 'Decades of hands-on expertise solving every plumbing challenge.' },
  { icon: ShieldCheckIcon, title: 'Licensed & Insured', desc: 'CA License #1012513 — fully bonded and insured for your protection.' },
  { icon: BoltIcon, title: 'Emergency Service', desc: '24/7 emergency plumbing available — we\'re here when you need us most.' },
  { icon: CheckCircleIcon, title: 'Honest & Quality Work', desc: 'Transparent pricing, clear communication, and workmanship you can trust.' },
  { icon: StarIcon, title: '5.0 ★ Google Rating', desc: '150+ five-star reviews from happy homeowners across the region.' },
]

const SERVICE_AREAS = [
  { name: 'Folsom', zip: '95630' },
  { name: 'Granite Bay', zip: '95746' },
  { name: 'El Dorado Hills', zip: '95762' },
  { name: 'Orangevale', zip: '95662' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ============================================================= */}
      {/*  HERO                                                          */}
      {/* ============================================================= */}
      <section className="relative bg-white text-black overflow-hidden min-h-[560px] md:min-h-[640px] lg:min-h-[720px]">
        {/* Cycling hero background: three images, fade-only crossfade */}
        <div className="absolute inset-0">
          {[
            '/images/hero/hero-1.png',
            '/images/hero/hero-2.png',
            '/images/hero/hero-3.png',
          ].map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 hero-bg-slide"
              style={{
                backgroundImage: `url(${src})`,
                animationDelay: `${i * 12}s`,
              }}
              aria-hidden
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" aria-hidden />
        <div className="relative site-container py-20 md:py-28 lg:py-36">
          <Reveal className="max-w-3xl" direction="left" delayMs={80}>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 text-black border border-black/10 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="flex gap-0.5 text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </span>
              <span>5.0 Rating · 150+ Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-black">
              Your Trusted <span className="text-accent-500">4th Generation</span> Plumber
            </h1>
            <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl leading-relaxed">
              Jeff Boaze Plumbing has proudly served Folsom, Granite Bay, and El Dorado Hills for
              over <strong className="text-black">40 years</strong>. Family-owned, fully licensed, and
              committed to one simple philosophy:
            </p>
            <p className="text-2xl md:text-3xl font-bold italic text-accent-500 mb-10">
              "Never a Problem, Only a Solution"
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9166223439"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                Call (916) 622-3439
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-black/5 border-2 border-black/20 text-black font-bold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  EMERGENCY BANNER                                              */}
      {/* ============================================================= */}
      <div className="bg-emergency">
        <Reveal className="site-container py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-white text-center">
          <span className="flex items-center gap-2 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            Plumbing Emergency?
          </span>
          <a
            href="tel:9166223439"
            className="font-bold underline underline-offset-2 hover:text-red-100 transition-colors"
          >
            Call (916) 622-3439 Now — We're Available 24/7
          </a>
        </Reveal>
      </div>

      {/* ============================================================= */}
      {/*  SERVICES                                                      */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="site-container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-3">Our Plumbing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to full-home construction plumbing, Jeff Boaze Plumbing handles it all with over four decades of expertise.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((svc, i) => {
              const Icon = SERVICE_ICON_BY_SLUG[svc.slug as ServiceSlug]
              return (
                <Reveal key={svc.slug} delayMs={i * 70}>
                  <Link
                    to={`/services?type=${svc.slug}`}
                    className="group block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary-500 mb-4 group-hover:text-primary-600 transition-colors" />
                    <h3 className="text-lg font-bold text-primary-800 mb-1">{svc.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{SERVICE_CARD_DESCRIPTION_BY_SLUG[svc.slug as ServiceSlug]}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>

        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHY CHOOSE US                                                 */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-3">Why Choose Jeff Boaze Plumbing?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just any plumber — we're your neighbors. Here's why thousands of families trust us.
            </p>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  TESTIMONIAL                                                   */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24 bg-primary-50">
        <Reveal className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 text-accent-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6" />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
            "I'm standing outside my house on a Saturday with no water to my house and I have a six week old baby...
            Jeff so far is amazing and willing to come by on his day off to help fix or assess the situation.
            These 5 stars are simply for him being kind enough to take the time away from his life to help...
            Jeff stopped by, did some finagling with the pipe and got our water back on. He gave us some advice
            on next time and if we needed to really repair the pipes. I will definitely be keeping his number."
          </blockquote>
          <div className="font-bold text-primary-800">Lindsey F.</div>
          <div className="text-sm text-gray-500 mb-6">Folsom, CA — via Yelp</div>
          <a
            href="https://www.yelp.com/biz/jeff-boaze-plumbing-folsom-8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-500 font-medium hover:underline"
          >
            Read more reviews on Yelp &rarr;
          </a>
        </Reveal>
      </section>

      {/* ============================================================= */}
      {/*  SERVICE AREAS                                                 */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-3">Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly serving homeowners and businesses across Sacramento and Placer counties.
              Whether you're near Folsom Lake or the El Dorado Hills Town Center, our technicians are just minutes away.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area, i) => (
              <Reveal key={area.zip} delayMs={i * 70}>
                <div className="bg-primary-50 rounded-xl p-5 text-center border border-primary-100">
                  <MapPinIcon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <h3 className="font-bold text-primary-800">{area.name}</h3>
                  <span className="text-sm text-gray-500">{area.zip}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  ESTIMATE FORM                                                 */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Reveal className="max-w-2xl mx-auto px-4">
          <RequestEstimateForm />
        </Reveal>
      </section>
    </>
  )
}
