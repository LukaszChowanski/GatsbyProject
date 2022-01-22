import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled(Link)`
  background-color: ${({
    theme: {
      colors: { btnBg }
    }
  }) => btnBg ?? '#fff'};
  box-shadow: 0 8px 16px
    ${({
      theme: {
        colors: { btnBgBs }
      }
    }) => btnBgBs ?? '#fff'};
  color: ${({
    theme: {
      colors: { btns }
    }
  }) => btns ?? '#fff'};
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px
      ${({
        theme: {
          colors: { btnBgColoredBs }
        }
      }) => btnBgColoredBs ?? '#fff'};
  }
`
