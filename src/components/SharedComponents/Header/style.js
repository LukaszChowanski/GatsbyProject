import styled from "styled-components";

const Container = styled.header`
  margin-bottom: 3rem;
  display: grid;
  
  & > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
  
  & > div {
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 3;
  }
  h1 {
    margin-bottom: 2rem;
    color: #fff;
  }
`

const ImgContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #f8f8f8;
    border-radius: 0 32px 500px 0;
    z-index: 0;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    z-index: 2;
    width: calc(100% - 5rem);
    height: 100%;
    background-color: #707070a1;
    border-radius: 0 32px 500px 0;
  }

  img {
    position: relative;
    width: calc(100% - 5rem);
    height: 230px;
    border-radius: 0 32px 500px 0;
  }
`

export default Container
export { ImgContainer }