import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RoutesComponents from './routes';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer />
          <RoutesComponents />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
