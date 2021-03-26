import styled from 'styled-components';

export const ApiContainer = styled.div`
position:absolute;
bottom:10;
width:50px;
display:grid;

h5 {
 color:#fff;
}

.sad-emoji, .happy-emoji {
    color: #fff;
    font-size:2rem;
    cursor:pointer;
    transition:all 432ms ease-in-out;

    &:hover {
        color:#0F1EFF;
    }
}
`

export const ApiListContainer = styled.div`

h1 {
    color: #fff;
}
`