import React from 'react';
import { Home } from '../pages/Home';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global/global'
import darkTheme from '../global/theme/darkTheme';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Home />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
