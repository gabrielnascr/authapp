import React from 'react';
import { Router } from 'react-router-dom';
import ContextProvider from './context';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ContextProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ContextProvider>
  );
}

export default App;
