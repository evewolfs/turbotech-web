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

export const Debouchage = ({ className }) => (
  <Svg viewBox="0 0 316.44 316.44" className={className}>
    <rect width="316.44" height="316.44" stroke="none" />

    <path d="M51.82,121.36v72.57c0,47.41,38.43,85.84,85.84,85.84s85.84-38.43,85.84-85.84v-22.05s-1.02-8.53,8.37-8.53h4.45" />
    <path d="M109.05,121.94v72.12c0,16.28,13.03,29.48,29.11,29.48s29.11-13.2,29.11-29.48v-29.98s-5.92-57.46,66.1-57.46h2.96" />
    <rect x="236.32" y="92.31" width="14.8" height="85.84" rx="7.4" ry="7.4" />
    <rect
      x="73.53"
      y="71.59"
      width="14.8"
      height="85.84"
      rx="7.4"
      ry="7.4"
      transform="translate(195.43 33.58) rotate(90)"
    />
    <path d="M251.12,102.05h17.87c1.86,0,3.37,1.51,3.37,3.37v59.37c0,1.86-1.51,3.37-3.37,3.37h-17.87" />
    <path d="M45.9,108.1v-23.28c0-3.49,2.83-6.31,6.31-6.31h55.45c3.49,0,6.31,2.83,6.31,6.31v23.28" />
    <path d="M109.05,78.5v-26.5c0-1.74-1.41-3.16-3.16-3.16H55.96c-1.74,0-3.16,1.41-3.16,3.16v26.5" />
    <path d="M78.46,139.67v57.66s3.95,57.09,65.61,53.49" />
    <polyline points="135.68 241.29 152.84 250.97 135.68 261.12" />
    <path d="M172.37,71.74c-4.95,23.51-22.26,18.56-13.6,23.51,9.46,5.41,13.12,17.98,13.56,19.61,.01,.04,.06,.03,.07,0h.07s.06,.05,.07,0c.44-1.63,4.09-14.2,13.56-19.61,8.66-4.95-8.66,0-13.6-23.51h-.11Z" />
    <path d="M144.26,114.88c-4.19,19.89-18.83,15.71-11.51,19.89,8.01,4.58,11.1,15.21,11.47,16.59,0,.03,.05,.03,.06,0h.06s.05,.04,.06,0c.37-1.38,3.46-12.02,11.47-16.59,7.32-4.19-7.32,0-11.51-19.89h-.09Z" />
    <path d="M144.18,63.2c-3.55,16.87-15.97,13.32-9.76,16.87,6.79,3.88,9.41,12.9,9.73,14.07,0,.03,.05,.02,.05,0h.05s.04,.04,.05,0c.32-1.17,2.94-10.19,9.73-14.07,6.21-3.55-6.21,0-9.76-16.87h-.08Z" />
  </Svg>
)
