import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerHome = styled(motion.main)`
  height: auto;
  width: 100%;
  padding: 0px 50px 0px 200px;

  .principal {
    /* display: flex;
    align-items: flex-start;
    justify-content: flex-start; */
  }

  @media (max-width: 920px) {
    padding: 0px 50px 0px 50px;
  }

  @media (max-width: 500px) {
    padding: 0px 25px 0px 25px;
  }
`;
