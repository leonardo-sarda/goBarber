import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './style';

const SingIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <form>
            <h1>Faça Seu Login</h1>

            <input placeholder="E-mail" />
            <input type="password" placeholder="Senha " />

            <button type="submit">Entrar</button>

            <a href="/">Esqueci minha senha</a>
          </form>

          <a href="/">
            <FiLogIn />
            Criar Conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SingIn;
