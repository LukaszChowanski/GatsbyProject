import { useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const WelcomePage = ({active, clickHandler}) => {
    const data = useStaticQuery(graphql`
    query Image {
        wpgraphql {
          ustawieniaQuizu {
            acf_settings {
              acfBg {
                acfBgStart {
                  sourceUrl
                }
              }
            }
          }
        }
      }
  `)


  return ( 
    <Container active={active} bg={data.wpgraphql.ustawieniaQuizu.acf_settings.acfBg.acfBgStart.sourceUrl} >
        <Content>
            <button onClick={clickHandler}>Kliknij mnie</button>
        </Content>

    </Container>
 )
}

export default WelcomePage


const Container = styled.div`
    background-image: url("${ props => props.bg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${ ({active}) => ( active === true) ? 1 : 0};
    transform: translateX(${ ({active}) => (active === true) ? 0 : '-100%'});
    transition: all 1s;
`
const Content = styled.section`
    width: 200px;
    height: 300px;

    & button {
padding: 1rem;
    }
`