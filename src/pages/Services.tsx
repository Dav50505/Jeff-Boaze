import { Link } from 'react-router-dom'
import RequestEstimateForm from '../components/RequestEstimateForm'
import {
  PhoneIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeModernIcon,
  CogIcon,
  CheckCircleIcon,
} from '../components/Icons'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    icon: FireIcon,
    title: 'Water Heater Services',
    desc: 'Whether your water heater needs a repair, replacement, or a brand-new installation, our technicians handle both traditional tank and modern tankless systems. We help you choose the most efficient and cost-effective option for your home.',
    bullets: ['Traditional water heater repair & replacement', 'Tankless water heater installation & service', 'Energy-efficient upgrades', 'Emergency hot water restoration'],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Plumbing Service & Repair',
    desc: 'From minor leaks to complete re-pipes, we service all types of plumbing systems. Our team is trained in Wirsbo, Wardflex, Pex Piping, copper, ABS, and all water, sewer, and gas systems.',
    bullets: ['Leak detection & repair', 'Pipe replacement & re-piping', 'Water pressure issues', 'All pipe materials: copper, PEX, ABS, CPVC'],
  },
  {
    icon: BoltIcon,
    title: 'Emergency Plumbing Services',
    desc: 'Plumbing emergencies don\'t wait — and neither do we. Call us anytime for burst pipes, major leaks, sewer backups, gas leaks, and more. We respond quickly to protect your home.',
    bullets: ['Burst pipe repair', 'Sewer backup resolution', 'Gas leak response', 'Flood damage mitigation'],
  },
  {
    icon: HomeModernIcon,
    title: 'Residential Plumbing Construction',
    desc: 'Jeff has plumbed thousands of homes from the ground up, from starter homes to 18,000+ sq. ft. custom estates. We partner with top general contractors to make your vision a reality.',
    bullets: ['New home construction plumbing', 'Custom home builds', 'Kitchen & bathroom remodels', 'Addition & expansion plumbing'],
  },
  {
    icon: CogIcon,
    title: 'Plumbing Fixtures Installation',
    desc: 'Upgrade your kitchen or bathroom with professional fixture installation. We handle faucets, sinks, showers, bathtubs, and more — ensuring everything is installed to code.',
    bullets: ['Faucet & sink installation', 'Shower & bathtub replacement', 'Outdoor hose bibs', 'ADA-compliant fixture installs'],
  },
  {
    icon: CogIcon,
    title: 'Garbage Disposal Solutions',
    desc: 'Whether your disposal is jammed, leaking, or needs a full replacement, we provide fast and affordable service to keep your kitchen running smoothly.',
    bullets: ['Garbage disposal repair', 'New disposal installation', 'InSinkErator & all major brands', 'Dishwasher hookup coordination'],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Toilet Repair & Installation',
    desc: 'From running toilets to complete replacements, we fix it fast. We also install low-flow and high-efficiency models to save water and money.',
    bullets: ['Toilet leak & clog repair', 'Wax ring & flange replacement', 'New toilet installation', 'Low-flow & dual-flush upgrades'],
  },
  {
    icon: CheckCircleIcon,
    title: 'Sewer & Drain Service',
    desc: 'Slow drains, sewer odors, or backups? We diagnose and resolve drain and sewer line issues with professional-grade equipment and decades of experience.',
    bullets: ['Drain cleaning & clearing', 'Sewer line repair & replacement', 'Video camera inspection', 'Root intrusion removal'],
  },
  {
    icon: FireIcon,
    title: 'Gas Line Services',
    desc: 'Gas line work requires precision and expertise. We handle installation, testing, and repair for natural gas and propane lines — safely and to code.',
    bullets: ['Gas line installation', 'Leak detection & repair', 'Appliance gas hookups', 'Pressure testing & certification'],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-linear-to-br from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Plumbing Services</h1>
          <p className="text-primary-200 text-lg max-w-2xl leading-relaxed">
            Full-service residential plumbing — from emergency repairs to new construction — backed by over 40 years of expertise.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <div className="bg-emergency">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-white text-center">
          <span className="flex items-center gap-2 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            Need Emergency Service?
          </span>
          <a
            href="tel:9166223439"
            className="font-bold underline underline-offset-2 hover:text-red-100 transition-colors"
          >
            Call (916) 622-3439 — Available 24/7
          </a>
        </div>
      </div>

      {/* Services list + sidebar */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {SERVICES.map((svc, idx) => (
              <article
                key={idx}
                id={svc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <svc.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary-800">{svc.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{svc.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24">
              <RequestEstimateForm compact heading="Get a Free Estimate" />

              {/* Quick call card */}
              <div className="mt-6 bg-primary-800 text-white rounded-xl p-6 text-center">
                <p className="font-semibold mb-2">Prefer to talk?</p>
                <a
                  href="tel:9166223439"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold px-5 py-3 rounded-lg transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  (916) 622-3439
                </a>
                <p className="text-primary-300 text-xs mt-3">Mon–Fri 8:30 AM – 4:30 PM · Sat by appt</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-primary-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Don't See Your Issue Listed?</h2>
          <p className="text-gray-600 mb-8">
            We handle all residential plumbing needs. Call us to discuss your project — we'll find the right solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:9166223439"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us Today
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
