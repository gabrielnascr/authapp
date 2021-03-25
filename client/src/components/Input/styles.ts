import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 1rem;

    input {
        width: 100%;
        padding: .6rem;

        border: 1px solid rgba(210, 214, 220, 1);
        border-radius: 5px;
    }
    input:focus{
        outline: 0;
        box-shadow: 0 0 3px 3px rgba(0, 125, 255, .2);

    }

    label {
        font-size: 0.8rem;
        font-weight: 600;
        opacity: 0.9
    }
`;


export const Error = styled.p`
    font-size: .75rem;
    color: #f05252
`