import { useStaticQuery, Link } from 'gatsby'
import React from 'react'

const LastComments = () => {
    const data = useStaticQuery(graphql`
        query CommentsQuery {
            wpgraphql {
            comments(last: 3) {
                edges {
                node {
                    id
                    author {
                    node {
                        name
                    }
                    }
                    commentedOn {
                    node {
                        slug
                    }
                    }
                }
                }
            }
            }
        }
    `)
      const comments = data.wpgraphql.comments.edges

    return (
        <ul>
            { comments.map( element => {
            console.log(element)
            return (
                <li key={element.node.id}>{element.node.author.node.name} -- <Link to="/">{element.node.commentedOn.node.slug}</Link></li>
            )})}
        </ul>
    )
}
export default LastComments