import React, { useContext, useState } from 'react'
import { UserStorage } from '../../../Context/UserContext'
import { SobreContainer } from './style'
import { motion } from 'framer-motion'
import Titulo from '../../Titulo/Titulo'
import imageSobre from '../../../assets/image_sobre.jpg'

const Sobre = () => {
    const [isHovered, setIsHovered] = useState(false)
    const { animationRoutes } = useContext(UserStorage)

    return (
        <SobreContainer variants={animationRoutes} animate="mostrar" initial="inicial" exit="esconder">
            <div className="text_about">
                <Titulo texto="Sobre Mim" />
            </div>
            <motion.div 
            whileHover={{scale: 1.1, x: -30, y: -20}}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{scale: 0.5}}
            transition={{delay: 0.1}}
            className="image_about">
                <div className="box-photo">
                    <img src={imageSobre} />
                    <motion.div 
                     className="background_green"></motion.div>
                </div>
            </motion.div>
        </SobreContainer>
    )
}

export default Sobre
