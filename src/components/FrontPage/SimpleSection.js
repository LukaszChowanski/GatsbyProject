// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import styled from "styled-components"

// import BootstrapContainer from "../SharedComponents/BootstrapContainer"

// const SimpleSection = () => {
//   const data = useStaticQuery(flexibleContent),
//     {
//       simplesectionHeading,
//       simplesectionParagraph,
//     } = data.wpgraphql.pageBy.homepage.flexibleContent[1]

//   console.log(data)

//   return (
//     <StyledSection>
//       <BootstrapContainer>
//         <h1>{simplesectionHeading}</h1>
//         <TheContentArticle
//           dangerouslySetInnerHTML={{ __html: simplesectionParagraph }}
//         ></TheContentArticle>
//       </BootstrapContainer>
//     </StyledSection>
//   )
// }

// export default SimpleSection

// const StyledSection = styled.section`
//   width: 100%;
//   padding: 5rem 0;
// `
// const TheContentArticle = styled.article`
//   p {
//     font: normal normal normal 20px/23px "PT Sans";
//   }
// `

// const flexibleContent = graphql`
//   query SimpleSectionQuery {
//     wpgraphql {
//       pageBy(uri: "/") {
//         uri
//         title
//         slug
//         homepage {
//           flexibleContent {
//             ... on WPGRAPHQL_Page_Homepage_FlexibleContent_Simplesection {
//               simplesectionHeading
//               simplesectionParagraph
//             }
//           }
//         }
//       }
//     }
//   }
// `
