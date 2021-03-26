import styled from 'styled-components';

export const FooterContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:3em;



section {
    display:flex;
    transition:all 0.4s ease-in-out;
    

    &:hover {
        opacity:0.7;
    }
    ul {

    li {
        list-style:none;
        font-size:2.5rem;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
            opacity: 0.5;
        }

        a {
            color: #fff;
        }

      

    }
    
}

}

  
`