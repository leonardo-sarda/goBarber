import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as y from 'yup';
import { Form } from '../../components/Form';

import { useAuth } from '../../hooks/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/Logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './style';

interface SingInFormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // Auteticação------------

  const { user, singIn } = useAuth();

  // Auteticação---------------

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        const schema = y.object().shape({
          email: y
            .string()
            .required('E-mail é obrigatório')
            .email('E-mail inválido'),
          password: y.string().required('Senha obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        singIn({ email: data.email, password: data.password });
      } catch (err: any) {
        if (err instanceof y.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [singIn],
  );
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça Seu Login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha "
            />

            <Button type="submit">Entrar</Button>

            <a href="/">Esqueci minha senha</a>
          </Form>

          <a href="/singup">
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
