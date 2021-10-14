import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px "Helvetica Neue", Arial, sans-serif;
    background: #333;
    color: #121214;
  }
`