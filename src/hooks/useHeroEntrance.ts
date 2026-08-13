import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useHeroEntrance() {
  const location = useLocation()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
    // Use double rAF to ensure DOM is painted before triggering animation
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        setReady(true)
      })
      return () => cancelAnimationFrame(raf2)
    })
    return () => cancelAnimationFrame(raf1)
  }, [location.pathname])

  return ready
}
