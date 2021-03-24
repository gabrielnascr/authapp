import React from 'react';
import styles from '../../styles/components/Button.module.css'

interface Props {
    children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
      <button type="submit" className={styles.primary}>
        {children}
      </button>
  )
}

export default Button;