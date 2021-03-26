import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';



export const HamburgerContainer = styled.div`
right:0;
top:0;
height: 100%;
width: 100%;
z-index:2;
position:absolute;
background: rgba(0,0,0, 0.9);

nav {
    position:relative;
    top:50px;

    ul {
        li {
            a {
                font-size:2.5rem;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-top:2em;
                text-align:center;
                color:#fff;
                text-decoration:none;
            }
        }
    }
}


`

export const NavLink = styled(Link)`

`

export const HamburgerLogo = styled.div`

@media screen and (min-width: 769px) {


.hamburger__logo {
    display:none;
}

@media screen and (min-width: 1024px) {


.hamburger__logo {
    display:none;
}
}
@media screen and (min-width: 1440px) {


.hamburger__logo {
    display:none;
}
}
}
`

export const DilanaLogo = styled.div`
.dilana__logo {
    color: gainsboro;
    position: absolute;
    left: 2em;
    top: 20px;
    font-size: 3rem;
}

@media screen and (max-width: 768px) {
    .dilana__logo {
        left:2.5rem;
    }
}

`