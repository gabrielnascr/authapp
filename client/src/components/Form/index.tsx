import React, { FormHTMLAttributes } from 'react';

import { Container, Content } from './styles';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, onSubmit, ...rest }: Props) => {
  return (
    <Container>
      <Content onSubmit={onSubmit}>
        {children}
      </Content>
    </Container>
  );
}

export default Form;