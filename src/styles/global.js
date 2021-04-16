import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --dark-navy: #020c1b;
        --lightest-navy: #384663;
        --dark-navy-secondary: #06162e;

        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;

        --green: #64ffda;
        --green-tint: rgba(26, 59, 52, 0.1);

        --font: 'Share Tech Mono', monospace;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 14px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 13px
        }
    }

    body {
        background-color: var(--dark-navy);
        --webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: bold;
    }

    body, input, textarea, button {
        font-family: var(--font);
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

`