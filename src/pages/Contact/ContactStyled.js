import styled from 'styled-components';

export const ContactContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;

.button__fun {
    height:40px;
    width:250px;
    color:#fff;
    background:transparent;
    border: 0.3px solid #0F1EFF;
    cursor:pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
}

`