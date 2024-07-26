import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RoutesComponents from './routes';

import GlobalStyle from './styles/global';

import authContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
