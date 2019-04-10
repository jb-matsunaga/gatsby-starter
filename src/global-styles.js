import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
import Const from 'src/const'

const { COLOR } = Const

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

  a {
    color: ${COLOR.DARK_CYAN};
    text-decoration: none;

    &:hover {
      color: ${COLOR.DARK_CYAN_ALPHA70};
      text-decoration: none;
    }
  }

  .l-markdown {
    ul {
      list-style-type: disc;
      padding-inline-start: 32px;
    }
  }
`

export default GlobalStyles
