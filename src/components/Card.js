import React from 'react'
import Box from './Box'

function CardIcon({ avatar, title, children, ...rootProps }) {
    return (
      <Box
       
        minHeight={200}
        padding={"4%"}
        width={250}
        style={{verticalAlign:"top"}}
        
        {...rootProps}
      >
        {avatar ? (
          <Box
            overflow="hidden" display='flex' justifyContent="center" alignItems="center"
          >
            {avatar}
          </Box>
        ) : null}
        {title ? (
          <Box fontSize="clamp(1rem, 2vw, 1.2rem)" marginTop="8%"   textTransform='uppercase' maxWidth="200px" textAlign='center'
          display='flex'
          flexDirection="column"
          alignItems="center" justifyContent="center">
            {title}
          </Box>
        ) : null}
        {children ? <Box>{children}</Box> : null}
      </Box>
    )
  }

  
export default CardIcon