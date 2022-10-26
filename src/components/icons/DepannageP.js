import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

const Svg = styled(Icon)`
  width: 250px;
  height: 250px;
  fill: none;
  stroke: #1c1c1c;
  stroke-miterlimit: 10;
  stroke-width: 3px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 786px) {
    width: 150px;
  height: 150px;
  }
`

export const DepannageP = ({ className }) => (
  <Svg viewBox="0 0 316.44 316.44" className={className}>
    <rect width="316.44" height="325.23" stroke="none" />
    <path d="M224.34,123.18c0-4.09-3.31-7.4-7.4-7.4h0c-4.09,0-7.4,3.31-7.4,7.4v71.04c0,4.09,3.31,7.4,7.4,7.4h0c4.09,0,7.4-3.31,7.4-7.4V123.18" />
    <path d="M109.34,123.18c0-4.09-3.31-7.4-7.4-7.4h0c-4.09,0-7.4,3.31-7.4,7.4v71.04c0,4.09,3.31,7.4,7.4,7.4h0c4.09,0,7.4-3.31,7.4-7.4V123.18" />
    <rect
      x="151.54"
      y="57.78"
      width="14.8"
      height="85.84"
      rx="7.4"
      ry="7.4"
      transform="translate(259.64 -58.24) rotate(90)"
    />
    <path d="M224.54,192.97h45.72c1.36,0,2.46-1.49,2.46-3.33v-61.34c0-1.84-1.1-3.33-2.46-3.33h-45.72" />
    <polyline points="209.54 192.97 171.55 192.97 168.22 179.47 178.22 175.47 181.62 158.97 171.22 170.47 152.22 173.47 145.57 192.97 110.33 192.97" />
    <path d="M94.34,124.97H47.05c-1.84,0-3.33,1.49-3.33,3.33v61.34c0,1.84,1.49,3.33,3.33,3.33h47.49" />
    <path d="M124.72,108.1v11.57c0,2.93-2.37,5.3-5.3,5.3h-10.08" />
    <path d="M192.72,92.97V48.49c0-1.39-1.49-2.52-3.33-2.52h-61.34c-1.84,0-3.33,1.13-3.33,2.52v44.48" />
    <path d="M209.54,124.97h-11.52c-2.93,0-5.3-2.37-5.3-5.3v-11.57" />
    <path d="M140.22,254.07c0,9.06,8.73,16.4,19.5,16.4s19.5-7.34,19.5-16.4c0-5.94-6.01-20.67-11.57-30.12l-7.93-13.04s-19.5,37.16-19.5,43.17Z" />
  </Svg>
)
