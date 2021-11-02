// import { useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const RightColumn = () => {


    return ( 
        <Container >
            <div>
                Treść
            </div>

        </Container>
     )
}
 
export default RightColumn


const Container = styled.div`
    text-align: left;
    padding: 40px 0 0 0;
    width: 100%;
    & h1 {
        padding: 30px 0;
    }
    & p {
        padding-bottom: 10px;
    }
`