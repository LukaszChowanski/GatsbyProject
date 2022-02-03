import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled(Link)<{ to: string }>`
  background-color: ${({ theme: { c_btnBg } }) => c_btnBg ?? '#fff'};
  box-shadow: 0 8px 16px ${({ theme: { c_btnBgBs } }) => c_btnBgBs ?? '#fff'};
  color: ${({ theme: { c_btns } }) => c_btns ?? '#fff'};

  &:hover {
    box-shadow: 0 8px 16px
      ${({ theme: { c_btnBgColoredBs } }) => c_btnBgColoredBs ?? '#fff'};
  }
`
