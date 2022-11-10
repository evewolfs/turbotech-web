import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
* {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--dark);
    
}

:root {
    --dark: #1C1C1C;
    --orange: #FE9D2B;
    --white: #eeeeee;
  
  }
`
