import styled from "styled-components";
import { colors } from "../../styles";

export const Image = styled.div`
    position: relative;
    background-size: cover;
    height: 280px;

    &::before{
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: 0;
        inset:0;
    }

    `
    export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 32px;
    font-weight: 100;
    height: 100%;
    
    p, h2{
        position: relative;
        z-index: 1;
        color: ${colors.white};
        font-size: 32px;
    }

    h2{
        font-weight: 900;
    }
`