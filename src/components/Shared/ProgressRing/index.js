import React from 'react'

export const ProgressRing = (props) => {
  const {
    percent,
    size,
    lineWidth,
    progressColor,
    trackColor,
    caps,
    children,
    spin,
    transitionDuration
  } = props

  const halfSize = size / 2
  const radius = halfSize - lineWidth / 2
  const circleLength = radius * 2 * Math.PI

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center'
      }}
    >
      <svg
        height={size}
        width={size}
        style={{
          animation: spin ? 'animation-rotate 2s linear infinite' : undefined
        }}
        shapeRendering='geometricPrecision'
      >
        <g
          style={{
            transformOrigin: `${halfSize}px ${halfSize}px`,
            transform: 'rotate(-90deg)'
          }}
        >
          <circle
            cx={halfSize}
            cy={halfSize}
            r={radius}
            stroke={trackColor}
            strokeWidth={lineWidth}
            fill='none'
          />
          <circle
            cx={halfSize}
            cy={halfSize}
            r={radius}
            style={{
              transition:
                transitionDuration > 0
                  ? `${transitionDuration}ms stroke-dashoffset`
                  : undefined,
              strokeDashoffset: circleLength * (1 - percent / 100)
            }}
            fill='none'
            strokeDasharray={circleLength}
            strokeWidth={lineWidth}
            stroke={progressColor}
            strokeLinecap={caps}
          />
        </g>
      </svg>
      {children ? <div style={{ zIndex: 1 }}>{children}</div> : null}
    </div>
  )
}

/*
  interface Props

  caps?: "butt" | "round";
  children?: React.ReactNode;
  lineWidth?: number;
  percent?: number;
  progressColor?: string;
  size?: number;
  spin?: boolean;
  trackColor?: string;
  transitionDuration?: number;
*/
