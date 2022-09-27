import React from 'react';
import { Home } from '../pages/Home';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global/global'
import darkTheme from '../global/theme/darkTheme';
import { Container } from './styles';
import { TasksProvider } from '../contexts/TasksContext';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TasksProvider>
        <Container>
          <Home />
        </Container>
      </TasksProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
