import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const RoutesComponents: React.FC = () => (
  <Routes>
    <Route path="/" element={<SingIn />} />
    <Route path="/singup" element={<SingUp />} />
  </Routes>
);

export default RoutesComponents;
