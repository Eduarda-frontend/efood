import styled from "styled-components";
import { colors } from "../../styles";

import excluir from '../../assets/lixeira-de-reciclagem 1.png'

type gridColumnsProps = {
    $gridColumns?: string
}

export const DivAside = styled.div`
    color: ${colors.light_orange};
    display: flex;
    justify-content: space-between;
    padding-top: 40px;

    p{
    font-size: 14px;
    margin: 0; 
    }
`

export const Item = styled.li`
    background-color: ${colors.light_orange};
    color:${colors.orange_rose};
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
    
    > div{
        h3{
            color:${colors.orange_rose};    
        }
    } 
`
export const DivRow = styled.div<gridColumnsProps>`
    display: grid;
    grid-template-columns: ${(props) => props.$gridColumns ||  '1fr 1fr'};
    gap: 34px;
`
    
