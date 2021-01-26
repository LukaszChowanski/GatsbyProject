import React from 'react'
import styled from 'styled-components'

const LeftColumn = ({title, content}) => {
    return ( 
        <Container>
            <h1>{title}</h1>
            <section dangerouslySetInnerHTML={{ __html: content}}/>
        </Container>
     );
}
 
export default LeftColumn;

const Container = styled.div`
    text-align: left;
    padding: 0 40px;
    width: 90%;
`