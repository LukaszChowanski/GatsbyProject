import React from 'react'
import styled from 'styled-components'

import TopElement from './TopElement/TopElement'
import BottomElement from './BottomElement/BottomElement'

const Nav = () => {
    return (
        <StyledNav>
            <TopElement/>
            <BottomElement/>
        </StyledNav>
    )
}

export default Nav

const StyledNav = styled.nav`
    width: 100%;
`