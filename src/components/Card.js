import React from 'react'
import Box from './Box'

function CardIcon({ avatar, title, children, ...rootProps }) {
    return (
      <Box
       
        minHeight={200}
        padding={20}
        width={300}
        
        {...rootProps}
      >
        {avatar ? (
          <Box
            overflow="hidden"
          >
            {avatar}
          </Box>
        ) : null}
        {title ? (
          <Box fontSize="clamp(1rem, 2vw, 1.2rem)" padding="10px 0">
            {title}
          </Box>
        ) : null}
        {children ? <Box>{children}</Box> : null}
      </Box>
    )
  }

  
export default CardIcon