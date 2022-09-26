import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

:focus{
  outline: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 152px;
  background-color:  ${({ theme }) => theme.gray600};
}


body {
  font-family: Inter, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: Inter, 'Courier New',
  monospace;
}
`