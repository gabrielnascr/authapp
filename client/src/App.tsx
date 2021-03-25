import React from 'react';
import { Router } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
