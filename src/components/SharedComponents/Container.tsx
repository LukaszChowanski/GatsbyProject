import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding-inline: 15px;
  margin-inline: auto;
  transition: all 0.5s;

  @media (min-width: 0) {
    width: 525px;
    max-width: 100%;
    padding-inline: 0;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 940) {
    width: 881px;
  }

  @media (min-width: 1064px) {
    width: 998px;
  }

  @media (min-width: 1264px) {
    width: 1185px;
  }
`
export default Container
