import styled from 'styled-components';

export const HomeContainer = styled.div`
display:grid;
padding-left:6em;
padding-top: 8em;
justify-content:flex-start;

section {
   z-index:1; 

h5 {
    color: gray;
    text-transform:uppercase;
}

h1 {
    color:gainsboro;
    font-size: 2.3rem;
    letter-spacing:0.3px;

    
        span {
            display:block;
        }
    
}
}



.button__view {
    width:120px;
    height:40px;
    background: #0F1EFF;
    outline:none;
    border:none;
    color:#fff;
    font-size:0.7rem;
    cursor:pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        opacity:0.7;
    }
}

.button__touch {
    width:120px;
    height:40px;
    background:transparent;
    color:#fff;
    outline:none;
    font-size:0.7rem;
    border:none;
    border:0.1em gray solid;
    margin-left:10px;
    cursor:pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        opacity:0.7;
    }
}

@media screen and (max-width: 768px) {
        
        padding-left: 3em;
        
            }

`

export const Img = styled.img`

    position:absolute;
    right:1em;
    width:25%;
    margin-right:7em;
    border-radius:50%;
    box-shadow: 1px 1px 400px #0F1EFF;

    @media screen and (max-width: 978px) {
        margin-right: 0;
    }
    
    @media screen and (max-width: 813px) {
        display: none;
    }


`