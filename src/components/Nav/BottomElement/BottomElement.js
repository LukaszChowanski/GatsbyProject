// /* eslint jsx-a11y/anchor-is-valid: 0 */
// import React from 'react'
// import styled from 'styled-components'
// import { Link, useStaticQuery, graphql } from "gatsby"

// const BottomElement = () => {
//     const data = useStaticQuery(graphql`
//     query MyQuery {
//       wpgraphql {
//         menus {
//           nodes {
//             menuItems {
//               nodes {
//                 databaseId
//                 label
//                 path
//               }
//             }
//           }
//         }
//       }
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
    
//   `)
//   const siteTitle = data.site.siteMetadata.title
//   const menuItems = data.wpgraphql.menus.nodes[0].menuItems.nodes
//     return (
//         <Container>
//             <div> { siteTitle } </div>
//             <Ul>

//               {menuItems && menuItems.map( ({path, databaseId, label}) => 
//                 <li key={databaseId}><Link to={path}>{label}</Link></li>)}
//             </Ul>
//       <Button>Umów się na bezpłatną konsultację</Button>
//         </Container>
//     )
// }

// export default BottomElement

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   max-width: 100%;
//   background-color: #fff;
//   box-shadow: 0 8px 16px #00000029;
//   border-radius: 0 0 16px 16px;
//   position: relative;
//   height: 64px;

//   width: 1185px;
//   margin: 0 auto;
//   padding: 0 32px;
// `
// const Ul = styled.ul`
//   display: flex;
//   background-color: #fff;
//   gap: 1rem;
//   padding-left: 0;
//   margin-block: 0;
//   list-style: none;
//   margin-inline: auto;

//   & li {

//   }

//   & a {
//     font: normal normal 400 18px/21px "PT Sans";
//     color: #707070;
//     padding: 0.6em 1em 0.4em;
//     line-height: 1;
//     text-decoration: none;
//   border-radius: 4px;
//   }
// `

// const Button = styled.button`
// background-color: #12bb45;
// -webkit-box-shadow: 0px 8px 16px #12bb457f;
// box-shadow: 0px 8px 16px #12bb457f;
// color: #fff;
// font-size: 16px;font: normal normal 400 18px/21px "PT Sans";
// font-size: 18px;
// padding: 4px 16px;
// text-decoration: none;
// border-radius: 4px;
// color: #fff;
// width: -webkit-max-content;
// width: -moz-max-content;
// width: max-content;
// outline: none;
// border: none;
// `

