import styled from "styled-components";
import { colors } from "../../styles"

import excluir from '../../assets/lixeira.png'

export const DivTotalValue = styled.div`
    color: ${colors.light_orange};
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 16px;

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
    margin-bottom: 16px;


    > button{
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
export const Amount = styled.div`
        display: flex;
        padding-top: 11px;
        font-size: 12px;

        p{
            padding: 0 8px;
            background-color: ${colors.white};
        }

        > button {
            width: 16px;
            height: 16px;
            background-color:${colors.orange_rose};    
            border: none;
            color: ${colors.white};
            font-weight: bold;  
            cursor: pointer;

            &:active{
                background-color: ${colors.light_orange};
            }
        }
`