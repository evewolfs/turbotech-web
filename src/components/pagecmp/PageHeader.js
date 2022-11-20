import React from 'react'
import Box from '../Box'

function PageHeader({ title, children, ...rootProps }) {
    return (
      <Box
       
        minHeight={0}
        padding={0}
        width={'100%'}
        
        
        
      
        
        {...rootProps}
      >
        {title ? (
          <Box fontSize="clamp(2rem, 3vw, 3rem)" style={{lineHeight:"1.2",   margin: '0 clamp(2rem, 2vw, 4rem)',
          padding: '0 clamp(1rem, 1vw, 2rem)'}}>
            {title}
          </Box>
        ) : null}
     
      </Box>
    )
  }

  
export default PageHeader


