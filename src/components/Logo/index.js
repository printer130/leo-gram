import * as React from "react"
import { Svg } from './styles'

export const Logo = (props) => {
  return (
    <Svg
      width={360.196}
      height={111.546}
      viewBox="69.902 19.227 360.196 111.546"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-scratch"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#ddd" floodOpacity={0.75} result="COLOR-blu" />
          <feFlood floodColor="#666" floodOpacity={0.4} result="COLOR-red" />
          <feTurbulence
            baseFrequency={0.05}
            type="fractalNoise"
            numOctaves={3}
            result="Texture_10"
          />
          <feColorMatrix
            values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -2.1 1.1"
            in="Texture_10"
            result="Texture_20"
          />
          <feColorMatrix
            result="Texture_30"
            values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.7 1.8"
            in="Texture_10"
          />
          <feOffset dx={-3} dy={4} in="SourceAlpha" result="FILL_10" />
          <feDisplacementMap
            scale={17}
            in="FILL_10"
            in2="Texture_10"
            result="FILL_20"
          />
          <feComposite
            operator="in"
            in="Texture_30"
            in2="FILL_20"
            result="FILL_40"
          />
          <feComposite
            operator="in"
            in="COLOR-blu"
            in2="FILL_40"
            result="FILL_50"
          />
          <feMorphology
            operator="dilate"
            radius={3}
            in="SourceGraphic"
            result="OUTLINE_10"
          />
          <feComposite
            operator="out"
            in="OUTLINE_10"
            in2="SourceGraphic"
            result="OUTLINE_20"
          />
          <feDisplacementMap
            scale={7}
            in="OUTLINE_20"
            in2="Texture_10"
            result="OUTLINE_30"
          />
          <feComposite
            operator="arithmetic"
            k2={-1}
            k3={1}
            in="Texture_20"
            in2="OUTLINE_30"
            result="OUTLINE_40"
          />
          <feConvolveMatrix
            order="8,8"
            divisor={1}
            kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1"
            in="SourceGraphic"
            result="BEVEL_10"
          />
          <feMorphology
            operator="dilate"
            radius={2}
            in="BEVEL_10"
            result="BEVEL_20"
          />
          <feComposite
            operator="out"
            in="BEVEL_20"
            in2="BEVEL_10"
            result="BEVEL_30"
          />
          <feDisplacementMap
            scale={7}
            in="BEVEL_30"
            in2="Texture_10"
            result="BEVEL_40"
          />
          <feComposite
            operator="arithmetic"
            k2={-1}
            k3={1}
            in="Texture_20"
            in2="BEVEL_40"
            result="BEVEL_50"
          />
          <feOffset dx={-7} dy={-7} in="BEVEL_50" result="BEVEL_60" />
          <feComposite
            operator="out"
            in="BEVEL_60"
            in2="OUTLINE_10"
            result="BEVEL_70"
          />
          <feOffset dx={-9} dy={-9} in="BEVEL_10" result="BEVEL-FILL_10" />
          <feComposite
            operator="out"
            in="BEVEL-FILL_10"
            in2="OUTLINE_10"
            result="BEVEL-FILL_20"
          />
          <feDisplacementMap
            scale={17}
            in="BEVEL-FILL_20"
            in2="Texture_10"
            result="BEVEL-FILL_30"
          />
          <feComposite
            operator="in"
            in="COLOR-red"
            in2="BEVEL-FILL_30"
            result="BEVEL-FILL_50"
          />
          <feMerge result="merge2">
            <feMergeNode in="BEVEL-FILL_50" />
            <feMergeNode in="BEVEL_70" />
            <feMergeNode in="FILL_50" />
            <feMergeNode in="OUTLINE_40" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-scratch)">
        <path d="M140.175 87.54q1.22 1.54 1.22 4.52 0 2.97-2.28 4.8-2.27 1.82-6.24 1.82-2.3 0-5.88-.51-7.04-1.09-9.06-1.09-2.02 0-2.85.1-.83.09-2.17.22l7.74-42.24h14.02l-6.4 35.2q.83.13 1.6.13h1.6q5.37 0 8.7-2.95zm31.42-.96q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm35.13 19.07q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.6 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm48.13 5.95l12.92-1.15q-4.6 10.11-4.6 21.82-1.73 1.22-4.26 1.22t-4.13-1.18q-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.59.96-5.34.96-2.76 0-5.16-.9-2.4-.89-4.25-2.88-4.1-4.35-4.1-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.73 3.14-.74 1.44-1.89 2.59-2.75 2.56-6.15 2.56-1.34 0-2.62-.45.26-1.92.26-4.16t-.16-3.26q-.16-1.02-.55-1.86-.83-1.72-2.65-1.72-1.83 0-3.84 1.95-2.02 1.95-3.62 5.15-3.52 7.17-3.52 15.81 0 3.97 1.54 6.78 1.66 3.07 4.6 3.07 1.03 0 1.96-.51.92-.51 1.31-.89l2.05-12.87zm36.09 2.63q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02l-3.33 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.72 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.51-5.89 14.59-5.89 3.27 0 5.64 1.09l10.94-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.49.51q-.93.51-1.67 1.67zm69.99 29.18q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62l-3.96 20.16-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.48 0-3.08 2.17-1.6 2.18-2.49 6.66l-3.91 20.16-12.6 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.66-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31t5.12.74q1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28z" />
      </g>
      <style />
    </Svg>
  )
}

