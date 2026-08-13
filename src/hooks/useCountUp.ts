import { useEffect, useRef, useState } from 'react'

export function useCountUp(end: number, duration = 1500, decimals = 0) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animateValue = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true
      const startTime = performance.now()

      const tick = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * end
        setCount(Number(current.toFixed(decimals)))

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          animateValue()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    // Fallback: if element is already visible on mount, animate immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      observer.disconnect()
      animateValue()
    }

    return () => observer.disconnect()
  }, [end, duration, decimals])

  return { ref, count }
}
