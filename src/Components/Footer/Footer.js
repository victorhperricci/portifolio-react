import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--green);
    margin-top: 40px;
    padding: 20px 20px 20px 200px;
`

const Footer = () => {
    return (
        <FooterContainer>
            Victor Hugo © 2020 - Todos os direitos reservados
        </FooterContainer>
    )
}

export default Footer
