import styled, { keyframes } from "styled-components";
import {motion} from 'framer-motion'


export const SobreContainer = styled(motion.main)`
  height: 100vh;
  padding: 0px 50px 0px 200px;
  width: 100%;
  display: flex;


  .text_about {
    /* background-color: #fff; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image_about {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content:center;

    div.box-photo {
      display: flex;
      align-items: center;
      justify-content:center;
      height: 70%;
      position: relative;
      transition: all .4s;
      overflow-x: hidden;
      border-radius: 4rem;
      

      box-shadow: 5px 5px 0px 5px var(--dark-navy), 10px 10px 0px 5px var(--green),
        20px 20px 0px 5px var(--dark-navy), 25px 25px 0px 5px var(--green);

      .background_green {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4rem;

        background-color: var(--green);
        filter: brightness(30%);
        opacity: 0.6;
        
      }

      img { 
        max-width: 100%;
        height: 100%;
        border-radius: 4rem;
        transition: all .4s;
      
      }

      &:hover {
        box-shadow: 0px 0px 0px 0px var(--dark-navy), 0px 0px 0px 0px var(--green),
        0px 0px 0px 0px var(--dark-navy), 0px 0px 0px 0px var(--green);
      }
    }

  }
`