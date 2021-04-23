import React from 'react'
import styled from 'styled-components'
import Titulo from '../Titulo/Titulo'

const ContatoOcntainer = styled.section`
    width: 100%;
    height: 100vh;
    padding: 100px 0;
    
    .info {
        p {
            margin-top: 20px;
            color: var(--slate);
        }
    }
`

const Contato = () => {
    return (
        <ContatoOcntainer className="section contato">
            <div className="info">
                <Titulo texto="Contato" />
                <p className="p">Caso queira entrar em contato, segue abaixo minhas redes sociais</p>
            </div>
            <div className="redes-sociais">

            </div>

        </ContatoOcntainer>
    )
}

export default Contato
