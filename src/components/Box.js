import React from "react"

function Box({
  children,
  fontSize,
  fontWeight = "600",
  color,
  maxWidth,
  minHeight,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  padding,
  width,
  overflow,
  textTransform,
  textAlign,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  position,

  style,
  ...props
}) {
  return (
    <div
      {...props}
      style={{
        color,
        fontSize,
        fontWeight,
        minHeight,
        padding,
        width,
        marginTop,
        display,
        maxWidth,
        textTransform,
        alignItems,
        overflow,
        justifyContent,
        flexDirection,
        textAlign,
        position,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Box
