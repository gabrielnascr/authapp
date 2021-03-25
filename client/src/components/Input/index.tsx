import React from 'react';
import { FieldError } from 'react-hook-form';

import { Container, Error } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface Props {
  name: string;
  type: string;
  placeholder?: string;
  title?: string;
  register: RefReturn;
  errors: FieldError | undefined;
}

const Input = ({ title, type, name, placeholder, register, errors }: Props) => {
  return (
    <Container>
      <label htmlFor={name}>{title}</label>
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          ref={register}
        />

        <Error>{errors?.message}</Error>
      </div>
    </Container>
  );
}

export default Input;