import { useSearchParams } from 'react-router-dom'
import { getServiceOrDefault } from '../data/servicesContent'
import { getServiceImages } from '../data/serviceImages'
import ServiceContent from '../components/ServiceContent'
import ServicesCtaBar from '../components/ServicesCtaBar'
import Reveal from '../components/Reveal'

export default function Services() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type')
  const service = getServiceOrDefault(typeParam)
  const serviceImages = getServiceImages(service.slug)

  return (
    <>
      <ServicesCtaBar />

      {/* Page Hero */}
      <section className="bg-linear-to-br from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <Reveal className="site-container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {service.title}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl leading-relaxed">
            Full-service residential plumbing — from emergency repairs to new
            construction — backed by over 40 years of expertise.
          </p>
        </Reveal>
      </section>

      {/* Emergency banner */}
      <div className="bg-emergency">
        <Reveal className="site-container py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-white text-center">
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
        </Reveal>
      </div>

      {/* Editorial content flow with integrated imagery */}
      <section className="py-12 md:py-16 pb-24 lg:pb-16">
        <Reveal className="site-container" direction="left">
          <ServiceContent
            service={service}
            showTitle={false}
            images={serviceImages}
          />
        </Reveal>
      </section>
    </>
  )
}
