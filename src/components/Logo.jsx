export default function Logo() {
  return (
    <div className="logo" aria-label="Fyndge">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="#5DCAA5" strokeWidth="1" />
        <circle cx="16" cy="16" r="8" stroke="#1D9E75" strokeWidth="1" />
        <circle cx="16" cy="16" r="3" fill="#9FE1CB" />
        <line
          x1="16"
          y1="16"
          x2="26.5"
          y2="5.5"
          stroke="#9FE1CB"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="26.5" cy="5.5" r="2.5" fill="#5DCAA5" />
      </svg>
      <span className="logo-name">Fyndge</span>
    </div>
  )
}
