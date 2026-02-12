import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type RevealDirection = 'up' | 'left' | 'right'

interface RevealProps {
  children: ReactNode
  direction?: RevealDirection
  delayMs?: number
  className?: string
}

export default function Reveal({
  children,
  direction = 'up',
  delayMs,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const style: CSSProperties | undefined =
    delayMs != null ? { transitionDelay: `${delayMs}ms` } : undefined

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
