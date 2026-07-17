'use client'

import { useEffect, useState } from 'react'

type Ripple = {
  id: number
  x: number
  y: number
}

export default function CursorRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    let idCounter = 0

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
      }

      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 800)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-splash"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  )
}
