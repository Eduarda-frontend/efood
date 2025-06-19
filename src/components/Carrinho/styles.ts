import styled from "styled-components";
import { colors } from "../../styles";

import excluir from '../../assets/lixeira-de-reciclagem 1.png'
import { ButtonLink } from "../Button/styles";

export const CarrinhoContainer = styled.div`
    display: none;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;


    &.show {
        display: flex;
    }

    img{
        width: 80px;
        height: 80px;
        margin-right: 8px;
        object-fit: cover;
    }

    ${ButtonLink}{
        background-color: ${colors.light_orange};
        color: ${colors.orange_rose};
        display: block;
        margin-top: 16px;
        font-size: 14px;
    }

`

export const Aside = styled.aside`
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0 8px; 
    background-color: ${colors.orange_rose};
    color: ${colors.orange_rose};

    h3{
        margin-bottom: 16px;
        font-size: 18px;
    }
`

export const DivAside = styled.div`
    color: ${colors.light_orange};
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding-top: 40px;

`

export const Item = styled.li`
    background-color: ${colors.light_orange};
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    padding: 8px;
    position: relative;

    button{
        background-image: url(${excluir});
        position: absolute;
        bottom: 8px;
        right:8px;
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: none;
    }
`

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`

