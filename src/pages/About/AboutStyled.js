import styled from 'styled-components';

export const AboutContainer = styled.div`
display:flex;
justify-content:space-evenly;
position:absolute;
left:6em;


p {
margin-top:10em;
color:gainsboro;
width:30vw;
line-height:1%.4rem;
letter-spacing:0.7px;
font-family: Helvetica, sans-serif;
}

span {
            display:block;
            margin-top: 10px;
        }

img {
    width:25%;
    height:25%;
    margin-top:7em;
    border-radius:50%;
    box-shadow: 1px 1px 400px #0F1EFF;
}

@media screen and (max-width: 768px) {
    display:block;
    right: 2em;

    p {
        width: 60vw;
    }

    img {
        width: 100%;
        margin-top:0;
    }
}
`