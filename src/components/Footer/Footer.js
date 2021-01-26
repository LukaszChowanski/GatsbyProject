import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
                Gansa Starter Kit &copy; || <a href="gansa.pl">gansa.pl</a>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    padding-top: 40px;
    width: 100%;
    display: flex;
    justify-content: left;
    margin-left: 30px;
`