import styled from "styled-components";
import { colors } from "../../styles"

import excluir from '../assets/lixeira.png'

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
