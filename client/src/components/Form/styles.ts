import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 26rem;
    padding: 0 1.2rem;

    @media (max-width: 650px) {
        max-width: 100%;
    }
`;

export const Content = styled.form`
    padding: 2rem;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgb(196, 190, 190, 0.1), 0 1px 2px 0 rgb(196, 190, 190, 1);
`;