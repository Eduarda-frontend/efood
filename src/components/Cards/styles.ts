import styled from "styled-components";
import { breackpoints, colors } from "../../styles";

export const Card = styled.li`
    position: relative;
    
    p{
        margin: 1rem 0;
    }

    button{
        width: 100%;
    }
`
export const CardText = styled.div`
    border: 1px solid ${colors.orange_rose};
    border-top: none;
    padding: 0.5rem;
`

export const Infos = styled.div`
    display: flex;
    position : absolute;
    top: 0;
    right: 0;
    gap: 8px;
    margin-right: 16px;
`

export const InfoMain = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
`
export const Nota = styled.div`
    display: flex;
    gap: 8px;
    font-size: 18px;
    align-items: flex-end;

`

export const Star = styled.img`
    width: 20px;
    height: 21px;
`

export const Capa = styled.img`
    object-fit: cover;
    width: 29rem;
    height: 13.56rem;
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &.show{
        display:flex;
    }

    .overlay{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }

`

export const ModalContent = styled.div`
    position: relative;
    width: 1024px;
    padding: 32px;
    background-color:  ${colors.orange_rose};
    color: ${colors.light_orange};
    z-index: 1;

    > div{
        display: flex;
    }

    > img {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px; 
    }

    @media (max-width: ${breackpoints.desktop}){
        margin: 0 24px;
    }

`
export const TitleModal = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;
`

export const DivText = styled.div`
    line-height: 22px;

    p{
        margin-bottom: 16px;
    }
`

export const ImgModal = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
`

export const Aviso = styled.div`
    background-color: #19e619;
    position: absolute;
    top:0;
    width: 100%;
    justify-content: center;
    padding: 8px;
    display: none;
    z-index: 1;

    &.warning{
        display: flex;
    }
`