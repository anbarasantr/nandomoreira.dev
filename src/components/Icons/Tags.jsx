import React from 'react'

export default ({ size = 20, fill = `currentColor`, ...props }) => {
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
        d="M33.16 19.13L19.58 5.55A1.92 1.92 0 0 0 18.21 5h-2.09l15.63 15.45-10.53 10.62a1.93 1.93 0 0 0 2.73 0l9.21-9.21a1.93 1.93 0 0 0 0-2.73z"
        className="clr-i-outline clr-i-outline-path-1"
      />
      <path
        d="M27.78 19.17L14.2 5.58A1.92 1.92 0 0 0 12.83 5H3.61a1.93 1.93 0 0 0-1.93 1.93v9.22a1.92 1.92 0 0 0 .57 1.36L15.84 31.1a1.93 1.93 0 0 0 2.73 0l9.21-9.21a1.93 1.93 0 0 0 0-2.72zM17.26 29.69L3.69 16.15V7h9.1l13.58 13.48z"
        className="clr-i-outline clr-i-outline-path-3"
      />
      <circle
        cx="7.81"
        cy="11.14"
        r="1.33"
        className="clr-i-outline clr-i-outline-path-2"
      />
    </svg>
  )
}
