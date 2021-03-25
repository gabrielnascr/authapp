import React, {  ButtonHTMLAttributes } from 'react';

import { ButtonSpinner, Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  loading?: boolean
}

const Button = ({ children, loading, ...rest}: Props) => {
  return (
    <Container disabled={loading} {...rest}>
      {loading ? <ButtonSpinner /> : children}
    </Container>
  );
}

export default Button;