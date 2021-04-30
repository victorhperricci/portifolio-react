import React from 'react'
import styled from 'styled-components';
import Rocket from "../../../../assets/rocket.gif";

const ImgRocket = styled.div`
    box-shadow: none;
    transform: rotateY(180deg);

    img {
    height: 100%;
    max-width: 100%;
    border-radius: 4rem;
    }

`

const ImageRocket = () => {
    return (
        <ImgRocket className="item_flip">
          <img src={Rocket} alt="Gif Rocket" />
        </ImgRocket>
    )
}

export default ImageRocket
