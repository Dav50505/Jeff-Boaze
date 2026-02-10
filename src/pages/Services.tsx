import { useSearchParams } from 'react-router-dom'
import { getServiceOrDefault } from '../data/servicesContent'
import { getServiceImages } from '../data/serviceImages'
import ServiceContent from '../components/ServiceContent'
import ServicesCtaBar from '../components/ServicesCtaBar'

export default function Services() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type')
  const service = getServiceOrDefault(typeParam)
  const imageUrls = getServiceImages(service.slug)

  return (
    <>
      <ServicesCtaBar />

      {/* Page Hero */}
      <section className="bg-linear-to-br from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {service.title}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl leading-relaxed">
            Full-service residential plumbing — from emergency repairs to new
            construction — backed by over 40 years of expertise.
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

      {/* Dynamic content – text left, images right on desktop; stacked on mobile */}
      <section className="py-12 md:py-16 pb-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left: text content */}
          <div className="min-w-0 flex-1 lg:w-2/3">
            <ServiceContent service={service} showTitle={false} />
          </div>
          {/* Right: images (sticky on desktop) */}
          {imageUrls.length > 0 && (
            <aside className="lg:w-1/3 lg:min-w-[280px] shrink-0">
              <div
                className={
                  imageUrls.length === 1
                    ? 'lg:sticky lg:top-24'
                    : 'grid grid-cols-2 gap-4 lg:grid-cols-1 lg:sticky lg:top-24'
                }
              >
                {imageUrls.map((src, i) => (
                  <div
                    key={src}
                    className={
                      imageUrls.length === 1
                        ? 'rounded-xl overflow-hidden shadow-sm border border-gray-100'
                        : 'rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-4/3'
                    }
                  >
                    <img
                      src={src}
                      alt={
                        imageUrls.length === 1
                          ? `${service.title} – Jeff Boaze Plumbing`
                          : `Image ${i + 1} of ${imageUrls.length}: ${service.title} – Jeff Boaze Plumbing`
                      }
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>
    </>
  )
}
