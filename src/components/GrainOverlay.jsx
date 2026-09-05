// Film grain overlay — CSS animation-based, lightweight
export default function GrainOverlay({ opacity = 0.035 }) {
  return (
    <div
      className="grain-overlay"
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
