import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const rebootCss = reboot()

const GlobalStyles = createGlobalStyle`
  ${rebootCss}
  html,
  body {
    height: 100%;
  }
  ul {
    padding: 0;
    list-style: none;
  }
`

export default GlobalStyles
