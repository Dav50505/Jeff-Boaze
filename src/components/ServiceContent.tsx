import type { ContentBlock, ServiceEntry } from '../data/servicesContent'

interface ServiceContentProps {
  service: ServiceEntry
  /** When false, H1 is omitted (e.g. when the page renders it in the hero). */
  showTitle?: boolean
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
        <section key={index} className="mb-10">
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
  showTitle = true,
}: ServiceContentProps) {
  return (
    <article className="max-w-3xl">
      {showTitle && (
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
          {service.title}
        </h1>
      )}
      <div className="space-y-2">
        {service.content.map((block, index) => renderBlock(block, index))}
      </div>
    </article>
  )
}
