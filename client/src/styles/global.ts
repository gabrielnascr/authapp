import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        border: none;
    }

    @media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
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
