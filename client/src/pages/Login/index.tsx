import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Header } from './styles';

import Input from '../../components/Input';
import Button, { } from '../../components/Button/';
import Form from '../../components/Form';
import { useAuth } from '../../context/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const schema = yup.object().shape({
  email: yup.string().email('O e-mail deve ser válido').required('Esse campo é obrigatório'),
  password: yup.string().required('Esse campo é obrigatório')
})

const Login = () => {
  const { loading, signIn } = useAuth()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    signIn(data.email, data.password);
  }

  return (
    <Container>
      <ToastContainer />
      <Header>
        <h3>Platform Name</h3>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          title="E-mail"
          name="email"
          type="email"
          placeholder="Digite seu email"
          register={register}
          errors={errors.email}
        />

        <Input
          title="Senha"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          register={register}
          errors={errors.password}
        />

        <Button loading={loading} disabled={loading}> Entrar </Button>
      </Form>
    </Container>
  );
} 

export default Login;