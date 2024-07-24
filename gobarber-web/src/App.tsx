import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RoutesComponents from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
