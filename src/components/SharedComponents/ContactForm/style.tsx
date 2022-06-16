import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const ContactSection = styled.section`
  position: relative;
`
const CloseModal = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: #fff;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  line-height: 24px;
  color: #000;
  padding: 0;
  font-weight: 700;

  svg {
    width: 100%;
    height: 100%;
  }
`

const Loader = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  background-color: #00000020;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 15px solid purple;
    border-top: 15px solid hotpink;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`

const Content = styled.div`
  padding: 4rem;

  ${({ theme }) => theme.b_small} {
    padding: 1rem;
  }

  h2 {
    color: #fff;
    max-width: 70%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 90px;
      border-bottom: 3px solid #fff;
    }

    ${({ theme }) => theme.b_small} {
      width: 90%;
    }
  }

  p {
    color: #fff;
    max-width: 50%;
    margin-bottom: 1rem;

    ${({ theme }) => theme.b_small} {
      max-width: 90%;
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    ${({ theme }) => theme.b_small} {
      display: flex;
      flex-direction: column;
    }
  }

  input {
    height: 32px;
    border-radius: 8px;
    border: none;
    padding-inline: 1rem;
  }

  button {
    grid-column: 2;
    justify-self: flex-end;
    background-color: ${({ theme }) => theme.c_btnBgColored};
  }
`

const Background = styled(GatsbyImage)`
  position: absolute;
  inset: 0;
  z-index: -1;

  img {
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 3;
    background-color: #000000a1;
    border-radius: 8px;
  }
`
const LabelCol = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  line-height: 28px;
`
const Response = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  color: #fff;
`
export {
  ContactSection,
  CloseModal,
  Loader,
  Content,
  Background,
  LabelCol,
  Response
}
