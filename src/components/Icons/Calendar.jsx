import React from 'react'

export default ({ size = 18, fill = `currentColor`, ...props }) => {
  return (
    <svg
      className="can-badge can-alert has-solid"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={size}
      height={size}
      fill={fill}
      {...props}
    >
      <path
        className="clr-i-outline clr-i-outline-path-1"
        d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-14"
        d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-15"
        d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1z"
      />
      <path className="clr-i-outline clr-i-outline-path-2" d="M8 14h2v2H8z" />
      <path className="clr-i-outline clr-i-outline-path-3" d="M14 14h2v2h-2z" />
      <path className="clr-i-outline clr-i-outline-path-4" d="M20 14h2v2h-2z" />
      <path className="clr-i-outline clr-i-outline-path-5" d="M26 14h2v2h-2z" />
      <path className="clr-i-outline clr-i-outline-path-6" d="M8 19h2v2H8z" />
      <path className="clr-i-outline clr-i-outline-path-7" d="M14 19h2v2h-2z" />
      <path className="clr-i-outline clr-i-outline-path-8" d="M20 19h2v2h-2z" />
      <path className="clr-i-outline clr-i-outline-path-9" d="M26 19h2v2h-2z" />
      <path className="clr-i-outline clr-i-outline-path-10" d="M8 24h2v2H8z" />
      <path
        className="clr-i-outline clr-i-outline-path-11"
        d="M14 24h2v2h-2z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-12"
        d="M20 24h2v2h-2z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-13"
        d="M26 24h2v2h-2z"
      />
      <path
        className="clr-i-outline clr-i-outline-path-16"
        d="M13 6h10v2H13z"
      />
      <path d="M21.29 6H13v2h7.14l1.15-2z" />
    </svg>
  )
}
