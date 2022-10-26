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

export const InstallationC = ({ className }) => (
  <Svg viewBox="0 0 316.44 316.44" className={className}>
    <rect width="316.44" height="316.44"  stroke="none"/>
    <rect
      x="151.29"
      y="194.61"
      width="114.38"
      height="79.96"
      rx="4.56"
      ry="4.56"
      transform="translate(416.95 469.18) rotate(-180)"
    />
    <line x1="187.56" y1="202.94" x2="187.56" y2="266.24" />
    <line x1="208.48" y1="202.94" x2="208.48" y2="266.24" />
    <line x1="229.39" y1="202.94" x2="229.39" y2="266.24" />
    <line x1="166.64" y1="202.94" x2="166.64" y2="266.24" />
    <line x1="250.31" y1="202.94" x2="250.31" y2="266.24" />
    <path d="M266.25,202.94h10.73c.62,0,1.13,.51,1.13,1.14v6.86c0,.63-.51,1.14-1.13,1.14h-10.73" />
    <path d="M150.1,265.08h-10.73c-.62,0-1.13-.51-1.13-1.14v-6.86c0-.63,.51-1.14,1.13-1.14h10.73" />
    <path d="M56.52,142.72v13.73c0,.5-.41,.9-.9,.9h-6.97c-.5,0-.9-.41-.9-.9v-13.73" />
    <path d="M106.52,142.72v13.73c0,.5-.41,.9-.9,.9h-6.97c-.5,0-.9-.41-.9-.9v-13.73" />
    <circle cx="55.82" cy="125.74" r="3.69" />
    <circle cx="77.58" cy="125.74" r="3.69" />
    <circle cx="99.34" cy="125.74" r="3.69" />
    <rect
      x="38.34"
      y="41.87"
      width="78.55"
      height="100.85"
      rx="6.44"
      ry="6.44"
    />
    <path d="M76.07,101.78s20.25-.17,9.02-24.98c0,0-2.15,5.37-3.21,5.52s3.02-12.24-6.41-19.84c0,0-.17,5.47-3.31,9.49-3.14,4.02-3.23,8.71-3.23,8.71,0,0-2.97-3.13-2.63-5.92s-9.92,27.11,9.78,27.01Z" />
  </Svg>
)
