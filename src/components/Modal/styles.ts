import styled from "styled-components"
import { breackpoints, colors } from "../../styles"

type ModalContentProps = {
    $alert: boolean
  }

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

export const ModalContent = styled.div<ModalContentProps>`
    position: relative;
    width: ${({$alert}) => ($alert ? '1024px' :'300px')};
    padding: 32px;
    background-color: ${({$alert}) => ($alert ? colors.orange_rose : colors.white)} ;
    color: ${({$alert}) => ($alert ? colors.light_orange : colors.orange_rose)};
    border-radius:  ${({$alert}) => ($alert ? '0' : '8px')};
    z-index: 1;

    > div{
        display: flex;
        justify-content: ${({$alert}) => ($alert ? 'flex-start' : 'center')}
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