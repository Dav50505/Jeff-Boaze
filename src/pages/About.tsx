import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
} from '../components/Icons'

const VALUES = [
  { icon: CheckCircleIcon, title: 'Honesty', desc: 'Transparent pricing with no hidden fees or unnecessary upsells.' },
  { icon: ShieldCheckIcon, title: 'Integrity', desc: 'We treat every home as if it were our own — doing the job right the first time.' },
  { icon: StarIcon, title: 'Quality', desc: 'Meticulous workmanship backed by decades of expertise and ongoing training.' },
  { icon: UserGroupIcon, title: 'Customer Service', desc: 'Courteous, clean technicians who respect your time and your home.' },
]

const TIMELINE = [
  { year: 'Family Legacy', text: 'The Boaze family tradition in plumbing goes back four generations — a legacy of expertise passed from father to son.' },
  { year: '2007', text: 'Jeff and his wife Debbie opened Jeff Boaze Plumbing, Inc. in Folsom, CA, bringing 40+ years of hands-on experience to the community.' },
  { year: '2014', text: 'Son Tyler joined the family business, continuing the 4th generation tradition and expanding the team\'s capacity.' },
  { year: 'Today', text: 'Jeff and Tyler serve thousands of families across Folsom, Granite Bay, El Dorado Hills, and Orangevale — always delivering on the family philosophy: "Never a Problem, Only a Solution."' },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-linear-to-br from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Jeff Boaze Plumbing</h1>
          <p className="text-primary-200 text-lg max-w-2xl leading-relaxed">
            A 4th generation, family-owned plumbing company built on honesty, integrity, and quality workmanship —
            proudly serving the greater Sacramento area for over 40 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
            <div className="prose prose-gray max-w-none text-gray-600 space-y-4 leading-relaxed">
              <p>
                Jeff Boaze is a plumber through and through. Growing up in a family where plumbing was the family
                trade, he learned the craft from a young age. With over <strong>40 years of hands-on experience</strong>,
                Jeff has personally plumbed thousands of homes — from the ground up — including custom estates
                exceeding 18,000 sq. ft., restaurants, water treatment facilities, and more.
              </p>
              <p>
                In <strong>2007</strong>, Jeff and his wife Debbie opened Jeff Boaze Plumbing, Inc. in Folsom, CA.
                Their goal was simple: bring the same level of care, expertise, and integrity that defines the Boaze
                family tradition to every customer's doorstep.
              </p>
              <p>
                In <strong>2014</strong>, their son <strong>Tyler</strong> joined the company, making it a true
                4th generation family business. Tyler brings the same dedication and skill, ensuring the Boaze
                legacy of excellence continues for years to come.
              </p>
              <p>
                Jeff is known for his ability to "see the plumbing through the walls" — a skill developed over
                decades that saves customers time, money, and the headache of unnecessary tear-outs. When other
                plumbers are stumped, homeowners call Jeff.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-primary-200">
            {TIMELINE.map((item, i) => (
              <div key={i} className="mb-8 last:mb-0 relative">
                <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-primary-100" />
                <span className="text-sm font-bold text-primary-500 uppercase tracking-wider">{item.year}</span>
                <p className="text-gray-600 mt-1 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-3">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every job, every customer, every time — these are the principles that guide us.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-bold text-primary-800 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Ready to Work with a Plumber You Can Trust?
          </h2>
          <p className="text-gray-600 mb-8">
            Experience the Jeff Boaze difference — honest, reliable, and always fair. Give us a call or
            request a free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:9166223439"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              (916) 622-3439
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
