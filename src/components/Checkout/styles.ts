import styled from "styled-components";
import { colors } from "../../styles";

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
export const DivRow = styled.div<gridColumnsProps>`
    display: grid;
    grid-template-columns: ${(props) => props.$gridColumns ||  '1fr 1fr'};
    gap: 34px;
`
    
export const PedidoFinalizado = styled.div`
    font-weight: normal;

    p{
        padding-bottom: 24px;
    }
`