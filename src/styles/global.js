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
        --green-tint: rgba(26, 59, 52, 0.3);

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

        @media (max-width: 920px) {
            font-size: 87.5%; // 13px
        }
    }

    body {
        background-color: var(--dark-navy);
        --webkit-font-smoothing: antialiased;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 12px;               /* width of the entire scrollbar */
        }
        
        &::-webkit-scrollbar-track {
            background: var(--dark-navy);        /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--green);
            opacity: 0.7;    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
        }
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


  
    .h1 {
        position: relative;

        &::after {
            content: '</h1>';
            display: block;
            position: absolute;
            left: -15px;
            
            color: var(--slate);
            opacity: 0.3;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;

            letter-spacing: 4px;
        }
        &::before {
            content: '<h1>';
            display: block;
            position: absolute;
            top: -20px;
            left: -15px;

            color: var(--slate);
            opacity: 0.5;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;
            letter-spacing: 4px;
            
        }
    }

    .p {
        position: relative;

        &::after {
            content: '</p>';
            display: block;

            margin: 0px 0px 5px 0px ;
            transform: translateX(-15px);

            color: var(--slate);
            opacity: 0.3;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;

            letter-spacing: 4px;
        }
        &::before {
            content: '<p>';
            display: block;
            transform: translateX(-15px);

            /* position: absolute; */
            /* top: -20px; */
            margin: 5px 0px 0px 0px ;
            
            color: var(--slate);
            opacity: 0.5;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;
            letter-spacing: 4px;
            
        }
    }

    .div {
        position: relative;

        &::after {
            content: '</div>';
            display: block;

            margin: 0px 0px 0px 0px ;
            transform: translateX(-20px);

            color: var(--slate);
            opacity: 0.3;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;

            letter-spacing: 4px;
        }
        &::before {
            content: '<div>';
            display: block;
            transform: translateX(-20px);

            /* position: absolute; */
            /* top: -20px; */
            margin: 0px 0px 20px 0px ;
            
            color: var(--slate);
            opacity: 0.5;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;
            letter-spacing: 4px;
            
        }
    }

    .section {
        position: relative;

        &::after {
            content: '</section>';
            display: block; 
            position: absolute;
            bottom: 30px;
            transform: translateX(-20px);

            color: var(--slate);
            opacity: 0.3;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;

            letter-spacing: 4px;
        }

        &::before {
            content: '<section>';
            display: block;
            transform: translateX(-20px);
            position: absolute;
            top: 30px;
            margin: 0px 0px 20px 0px ;
            
            color: var(--slate);
            opacity: 0.5;
            font-size: 0.8rem;
            font-family: 'Pacifico', cursive;
            letter-spacing: 4px;
            
        }
    }


    // Link

    a.link {
        background-color: transparent;
        border: 1px solid var(--slate);
        color: var(--slate);
        margin-top: 2rem;
        width: max-content;
        padding: 2rem 4rem;
        border-radius: 0.425rem;
        position: relative;
        overflow: hidden;
        transition: all 0.6s;

        p {
            z-index: 10000;
            position: inherit;
            transition: all 0.4s;
        }

        div.bgc {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 0%;
            height: 100%;
            background-color: var(--green);
            clip-path: polygon(0 0, 100% 0%, 84% 100%, 0 100%);

            transition: all 0.6s;
            z-index: 0;
        }

        &:hover {
            color: var(--green);

            div.bgc {
                width: 130%;
            }

            p {
                color: var(--dark-navy);
            }
        }

        @media(max-width: 500px) {
            padding: 1.5rem 2rem;

        }
    }



`;
