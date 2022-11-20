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
          <Box fontSize="clamp(1rem, 2vw, 1.2rem)" margin="4%"   textTransform='uppercase' maxWidth="200px" textAlign='center'
          display='flex'
          flexDirection="column"
          alignItems="center" padding="1% 6%">
            {title}
          </Box>
        ) : null}
        {children ? <Box>{children}</Box> : null}
      </Box>
    )
  }

  
export default CardIcon