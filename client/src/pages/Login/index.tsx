import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Header } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button/';
import Form from '../../components/Form';

const schema = yup.object().shape({
  email: yup.string().email('O e-mail deve ser válido').required('Esse campo é obrigatório'),
  password: yup.string().required('Esse campo é obrigatório')
})

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <h3>Platform Name</h3>
      </Header>
      <div>

      </div>
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

        <Button> Entrar </Button>
      </Form>
    </Container>
  );
}

export default Login;