import styled from "styled-components";
import { colors } from "../../styles";

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


