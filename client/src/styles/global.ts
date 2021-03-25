import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        border: none;
    }

    body {
        background-color: rgba(249,250,251, 1);
    }

    body,
    button,
    input {
        font-family: "Poppins", sans-serif;
        color: rgb(87, 87, 87);
    }
`;
