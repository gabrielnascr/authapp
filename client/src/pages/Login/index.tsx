import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import styles from '../../styles/pages/Login.module.css'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
    <div className={styles.container}>
      <div className={styles.loginHeader}>
        <h3>Platform Name</h3>
      </div>
      <div className={styles.loginWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          <div>
            <label htmlFor="email">
              E-mail
            </label>
            <div>
              <input
                type="text"
                placeholder="Digite seu email"
                id="email" ref={register}
                name="email"
              />
              <p className='text-error'>{errors.email?.message}</p>
            </div>

          </div>
          <div>
            <label htmlFor="password">
              Senha
            </label>
            <div>
              <input
                type="password"
                placeholder="Digite sua senha"
                id="password" ref={register}
                name="password"
              />
              <p className='text-error'> {errors.password?.message} </p>
            </div>

          </div>
          <Button> Entrar </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;