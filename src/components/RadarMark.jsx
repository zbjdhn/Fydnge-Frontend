export default function RadarMark() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="90" stroke="#085041" strokeWidth="1" />
      <circle cx="100" cy="100" r="66" stroke="#0F6E56" strokeWidth="1" />
      <circle cx="100" cy="100" r="42" stroke="#1D9E75" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="18" stroke="#5DCAA5" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="5" fill="#9FE1CB" />
      <line x1="100" y1="100" x2="164" y2="36" stroke="#9FE1CB" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="164" cy="36" r="5" fill="#5DCAA5" />
      <circle cx="164" cy="36" r="10" stroke="#1D9E75" strokeWidth="1" />
      <circle cx="164" cy="36" r="16" stroke="#085041" strokeWidth="0.8" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="#085041" strokeWidth="0.5" strokeDasharray="3,4" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="#085041" strokeWidth="0.5" strokeDasharray="3,4" />
      <circle cx="56" cy="148" r="2" fill="#1D9E75" opacity="0.4" />
      <circle cx="170" cy="128" r="1.8" fill="#5DCAA5" opacity="0.5" />
    </svg>
  )
}
