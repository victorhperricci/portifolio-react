import React from 'react'
import styled from 'styled-components';
import useMedia from '../../../../Hooks/useMedia'
import imageSobre from "../../../../assets/image_sobre.jpg";

const Image = styled.div`
    box-shadow: 5px 5px 0px 5px var(--dark-navy),
    10px 10px 0px 5px var(--green), 20px 20px 0px 5px var(--dark-navy),
    25px 25px 0px 5px var(--green);
    overflow: hidden;

    img {
    max-width: 100%;
    height: 100%;
    border-radius: 4rem;
    transition: all 0.4s;
    object-fit: cover;
    }

    &::before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    background-color: var(--green);
    filter: brightness(30%);
    opacity: 0.5;
    position: absolute;
    transition: all 0.5s;
    transition-delay: 0.2s;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    }

    &:hover {
    box-shadow: 0px 0px 0px 0px var(--dark-navy),
        0px 0px 0px 0px var(--green), 0px 0px 0px 0px var(--dark-navy),
        0px 0px 0px 0px var(--green);

    &::before {
        opacity: 0;
        width: 0%;
        height: 0%;
    }
    }

    &.img_mb {
        box-shadow: none;
        overflow: visible;
        width: 100%;
        border-radius: 4rem;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 100%;
            object-fit: cover;
            border-radius: 4rem;
            margin-top: 4rem;
        }

        &::before {
            content: "";
            display: none;
            width: 200%;
            height: 200%;
            background-color: var(--green);
            filter: brightness(30%);
            opacity: 0.5;
            position: absolute;
            transition: all 0.5s;
            transition-delay: 0.2s;
            clip-path: polygon(0 0, 0% 100%, 100% 0);
        }

        @media(max-width: 500px) {
            height: 300px;
            justify-content: flex-start;
        }
    }
`

const ImageSobre = () => {
    const media = useMedia('(max-width: 920px)')

    return (
        <Image className={media ? 'img_mb' : ''}>
          <img  src={imageSobre} alt="Imagem Victor Hugo" />
        </Image>
    )
}

export default ImageSobre
