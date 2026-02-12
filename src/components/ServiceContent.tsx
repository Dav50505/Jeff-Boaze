import type { ServiceImage } from '../data/serviceImages'
import type { ContentBlock, ServiceEntry } from '../data/servicesContent'

const MAX_EDITORIAL_IMAGES = 3
const INLINE_IMAGE_INSERT_LIMIT = 2

interface ServiceContentProps {
  service: ServiceEntry
  images?: ServiceImage[]
  /** When false, H1 is omitted (e.g. when the page renders it in the hero). */
  showTitle?: boolean
}

function getImageRenderWidth(image: ServiceImage, isLead: boolean): number {
  const maxWidth = image.isLowRes
    ? isLead
      ? 280
      : 260
    : isLead
      ? 420
      : 340

  return Math.min(maxWidth, image.width)
}

function getServiceImageAlt(
  serviceTitle: string,
  index: number,
  total: number,
): string {
  return total === 1
    ? `${serviceTitle} – Jeff Boaze Plumbing`
    : `Image ${index + 1} of ${total}: ${serviceTitle} – Jeff Boaze Plumbing`
}

interface EditorialImageProps {
  image: ServiceImage
  serviceTitle: string
  index: number
  total: number
  lead?: boolean
}

function EditorialImage({
  image,
  serviceTitle,
  index,
  total,
  lead = false,
}: EditorialImageProps) {
  const imageWidth = getImageRenderWidth(image, lead)

  return (
    <figure
      className={
        lead
          ? 'service-lead-figure mb-6 mx-auto md:float-right md:ml-8 md:mb-5 md:mt-1 md:mr-0'
          : 'service-inline-figure my-8 mx-auto'
      }
      style={{ width: `${imageWidth}px`, maxWidth: '100%' }}
    >
      <img
        src={image.src}
        alt={getServiceImageAlt(serviceTitle, index, total)}
        width={image.width}
        height={image.height}
        className="block h-auto max-w-full rounded-xl shadow-sm border border-gray-100"
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-4">
          {block.text}
        </p>
      )
    case 'paragraphs':
      return (
        <div key={index} className="space-y-4 mb-6">
          {block.texts.map((text, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      )
    case 'list':
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )
    case 'section':
      return (
        <section key={index} className="service-section mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-primary-800 mb-4">
            {block.title}
          </h2>
          <div className="space-y-4">
            {block.blocks.map((b, i) => renderBlock(b, i))}
          </div>
        </section>
      )
    case 'numbered':
      return (
        <ol key={index} className="list-decimal pl-6 space-y-4 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-primary-800">{item.title}</span>
              {item.content != null && (
                <span className="block mt-1">{item.content}</span>
              )}
              {item.subItems != null && item.subItems.length > 0 && (
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {item.subItems.map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )
    default:
      return null
  }
}

export default function ServiceContent({
  service,
  images = [],
  showTitle = true,
}: ServiceContentProps) {
  const editorialImages = images.slice(0, MAX_EDITORIAL_IMAGES)
  const leadImage = editorialImages[0]
  const supportImages = editorialImages.slice(1)
  const contentNodes: React.ReactNode[] = []
  let supportImageIndex = 0

  service.content.forEach((block, index) => {
    contentNodes.push(renderBlock(block, index))

    if (
      block.type === 'section' &&
      supportImageIndex < supportImages.length &&
      supportImageIndex < INLINE_IMAGE_INSERT_LIMIT
    ) {
      const supportImage = supportImages[supportImageIndex]

      contentNodes.push(
        <EditorialImage
          key={`service-inline-image-${supportImage.src}`}
          image={supportImage}
          serviceTitle={service.title}
          index={supportImageIndex + 1}
          total={editorialImages.length}
        />,
      )

      supportImageIndex += 1
    }
  })

  return (
    <article className="service-content-flow max-w-6xl mx-auto">
      {showTitle && (
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
          {service.title}
        </h1>
      )}
      {leadImage != null && (
        <EditorialImage
          image={leadImage}
          serviceTitle={service.title}
          index={0}
          total={editorialImages.length}
          lead
        />
      )}
      <div className="space-y-2">
        {contentNodes}
      </div>
    </article>
  )
}
