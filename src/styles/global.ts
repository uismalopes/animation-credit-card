import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }
  input,
  textarea,
  button,
  select {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  body {
    font-size: 1.6rem;
    background: ${props => props.theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .row {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    .column {
      padding: 0 15px;
      flex: 50%;
    }
  }
  .text-uppercase {
    text-transform: uppercase;
  }
`