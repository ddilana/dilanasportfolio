import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";


export const NavBarContainer = styled.div`



nav {
    display:flex;
    justify-content:flex-end;
    padding-right:6em;
    ul {
    li {
    list-style:none;
        a {
            color: gray;
            font-weight:bold;
            display:flex;
            font-size:1.1rem;
            text-decoration:none;
            transition:all 0.4s ease-in-out;

            &:hover {
                color: gainsboro
            }
        }
    }
}

}

@media screen and (max-width: 768px) {

    display:none;
}

`

export const NavLink = styled(Link)`

`
