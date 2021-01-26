import { useStaticQuery, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import LastComments from './LastComments'

const RightColumn = () => {

    return ( 
        <Container>
            <FindContainer>
                <input type="text" placeholder="Szukaj..."/>
                <button type="submit">Szukaj</button>
            </FindContainer>
            <NewPost>
                <h2>Najnowsze wpisy</h2>
                <PostList/>
            </NewPost>
            <NewComments>
                <h2>Najnowsze komentarze</h2>
                <LastComments/>
            </NewComments>

        </Container>
     )
}
 
export default RightColumn

const PostList = () => {

    const data = useStaticQuery(graphql`
    query PostQuery {
        wpgraphql {
          posts {
            nodes {
              title
              id
            }
          }
        }
      }
  `)
    const postTitles = data.wpgraphql.posts.nodes

    return (
        <ul> 
            { postTitles.map( node => (
                <li key={node.id}>
                    <Link to='/'>{node.title}</Link>
                </li>
            )) }
        </ul>
    )
}

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
const FindContainer = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    width: 90%;
    height: 40px;
    & input {
        padding: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: 1px solid lightgray;
        &:focus {
            border: 1px solid lightgreen;
            box-shadow: 0 0 3pt 2pt lightgray;
        }
    }
    & button {
        background-color: green;
        color: white;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`
const NewPost = styled.div`
    & h2 {
        font-size: 32px;
    }
    & li {
        margin-left: 15px;
    }
    & a {
        color: green;
    }
`

const NewComments = styled(NewPost)`
`