import React from 'react'
import Box from '../Box'
import styled from 'styled-components'

function PageHeader({ title, children, ...rootProps }) {
    return (
      <Box
       
        minHeight={0}
        padding={0}
        width={'100%'}
        
        
        
      
        
        {...rootProps}
      >
        {title ? (
          <Box fontSize="clamp(1.6rem, 3vw, 3rem)" style={{lineHeight:"1.2",
          padding: '0% 2%', margin: '0 2%'}}>
            {title}
          </Box>
        ) : null}
     
      </Box>
    )
  }

  
export default PageHeader




