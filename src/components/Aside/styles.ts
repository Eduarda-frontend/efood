import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonStyled } from "../Button/styles";

export const AsideContainer = styled.div`
    display: none;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    color: ${colors.light_orange};
    font-size: 14px;
    font-weight: bold;

    &.show {
        display: flex;
    }

    img{
        width: 80px;
        height: 80px;
        margin-right: 8px;
        object-fit: cover;
    }

    h2{
        margin-bottom: 16px;
        font-size: 16px;
    }
        
    input{
        background-color:  ${colors.light_orange};
        border-color: ${colors.light_orange};
        color: #4B4B4B;
        font-weight: bold;
        display: block;
        width: 100%;
        height: 32px;
        margin: 8px 0;
    }

`
export const InputGroup = styled.div`
    display: block;
    gap: 34px;
    max-width: auto;
`

    
export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`

export const Div = styled.aside`
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0 8px; 
    background-color: ${colors.orange_rose};

    h3{
        margin-bottom: 16px;
        font-size: 18px;
        color: ${colors.light_orange};
    }
`

export const ContainerButton = styled.div`
    
    margin-top: 24px};
    
    ${ButtonStyled}{
        margin-bottom: 8px;
        width: 100%;
        display: block;
    }
    
`