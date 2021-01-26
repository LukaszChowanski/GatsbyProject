/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import styled from 'styled-components'

import SocialMediaContainer from '../../SharedComponents/SocialMediaContainer'

const TopElement = () => {
    return (
        <>
            <Container>
                <SocialMediaContainer facebook instagram twitter linkedin youtube/>
                <Ul>
                    <li><a href='#'>ene</a></li>
                    <li><a href='#'>due</a></li>
                    <li><a href='#'>rike</a></li>
                    <li><a href='#'>fake</a></li>
                    <li><a href='#'>#</a></li>
                </Ul>
            </Container>
        </>
    )
}

export default TopElement

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
`

const Ul = styled.ul`
    list-style-type:none;
    display: flex;
    margin-right: 10px;
    & a{
        margin-right: 5px;
        color: green;
    }

`