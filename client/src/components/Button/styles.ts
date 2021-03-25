import styled from "styled-components/macro";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.6rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  outline-color: #b4ffd6;

  color: white;
  font-weight: 600;
  background-color: #30ba73;

  cursor: pointer;
  transition: all 0.5s;

  :disabled {
    cursor: no-drop;
    opacity: 0.8
  }
`;

export const ButtonSpinner = styled.div`
  width: 1.26rem;
  height: 1.26rem;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  border-top-color: white;
  opacity: 0.8;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
