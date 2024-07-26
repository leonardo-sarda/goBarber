import React, { createContext, ReactNode, useCallback } from 'react';

import api from '../services/api';

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  singIn(credentials: SingInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const singIn = useCallback(async ({ email, password }: SingInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Leonardo', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
