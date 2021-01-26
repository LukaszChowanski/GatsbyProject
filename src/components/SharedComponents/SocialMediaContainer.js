/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'


const SocialMediaContainer = ({facebook, instagram, linkedin, twitter, youtube, size}) => {
    return(
        <Ul fontSize={size}>
        { facebook && <li><a href="#">
                <FontAwesomeIcon icon={faFacebook} spin/>
            </a>
        </li> }
        { instagram && <li><a href="#">
                <FontAwesomeIcon icon={faInstagram} pulse/>
            </a>
        </li>}
        { linkedin && <li><a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </li> }
        { twitter && <li><a href="#">
                <FontAwesomeIcon icon={faTwitter} pull="left"/>
            </a>
        </li> }
        { youtube && <li><a href="#">
                <FontAwesomeIcon icon={faYoutube} pull="right"/>
            </a>
        </li> }
    </Ul>
    )
}

export default SocialMediaContainer

const Ul = styled.ul`
    list-style-type:none;
    display: flex;
    & li {
        font-size: ${ props => props.fontSize || '16px' }
    }
    & a{
        margin-right: 5px;
        color: ${ ({theme}) => theme.iconColor || 'green'};
    }

`