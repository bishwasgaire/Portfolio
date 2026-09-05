import { useState, useEffect, useRef } from 'react'
import { useHasHover } from '../hooks/useMediaQuery.js'

const CURSOR_LABELS = {
  view: 'VIEW',
  play: 'PLAY',
  open: 'OPEN',
  sound: 'SOUND',
  default: '',
}

export default function CursorInteraction() {
  const hasHover = useHasHover()
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const labelRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const outerPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)
  const [label, setLabel] = useState('')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!hasHover) return

    const outer = outerRef.current
    const inner = innerRef.current
    const labelEl = labelRef.current
    if (!outer || !inner || !labelEl) return

    function lerp(a, b, t) { return a + (b - a) * t }

    function animate() {
      outerPosRef.current.x = lerp(outerPosRef.current.x, posRef.current.x, 0.1)
      outerPosRef.current.y = lerp(outerPosRef.current.y, posRef.current.y, 0.1)
      outer.style.left = outerPosRef.current.x + 'px'
      outer.style.top = outerPosRef.current.y + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    function onMouseMove(e) {
      posRef.current = { x: e.clientX, y: e.clientY }
      inner.style.left = e.clientX + 'px'
      inner.style.top = e.clientY + 'px'
      labelEl.style.left = e.clientX + 'px'
      labelEl.style.top = e.clientY + 'px'
    }

    function onMouseOver(e) {
      const el = e.target.closest('[data-cursor]')
      if (el) {
        const cursorType = el.getAttribute('data-cursor')
        const newLabel = CURSOR_LABELS[cursorType] || ''
        setLabel(newLabel)
        setExpanded(true)
      } else {
        setLabel('')
        setExpanded(false)
      }
    }

    function onMouseLeave() {
      posRef.current = { x: -200, y: -200 }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [hasHover])

  if (!hasHover) return null

  return (
    <>
      <div
        ref={outerRef}
        className="cursor-outer"
        style={{
          width: expanded ? '48px' : '32px',
          height: expanded ? '48px' : '32px',
          borderColor: expanded ? 'rgba(31, 35, 40, 0.6)' : 'rgba(31, 35, 40, 0.25)',
        }}
        aria-hidden="true"
      />
      <div ref={innerRef} className="cursor-inner" aria-hidden="true" />
      <div
        ref={labelRef}
        className="cursor-label"
        style={{ opacity: label ? 1 : 0 }}
        aria-hidden="true"
      >
        {label}
      </div>
    </>
  )
}
