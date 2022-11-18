import React from "react"

function Box({
  children,
  fontSize,
  fontWeight = '600', 
  color,
  maxWidth="200px",
  minHeight,
  margin="4%",
  padding="6%",
  width,
  overflow,
  textTransform='uppercase',
  textAlign='center',
  display='flex',
  flexDirection="column",
  alignItems="center",

  style,
  ...props
}) {
  return (
    <div
      {...props}
      style={{ color,fontSize, fontWeight, minHeight, margin, padding, width, display, maxWidth, textTransform, alignItems, overflow, flexDirection, textAlign, ...style }}
    >
      {children}
    </div>
  )
}

export default Box
