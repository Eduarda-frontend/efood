import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.li`
    position: relative;
    
    p{
        margin: 16px 0;
    }
`
export const CardText = styled.div`
    border: 1px solid ${colors.orange_rose};
    border-top: none;
    padding: 0 8px;
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
    font-size: 18px;
    justify-content: space-between;
    
    h2{
        font-size: 18px;
        margin-top: 8px;
    }
`
export const Nota = styled.div`
    display: flex;
    gap: 8px;
`

export const Star = styled.img`
    width: 20px;
    height: 21px;
`