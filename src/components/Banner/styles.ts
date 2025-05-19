import styled from "styled-components";
import { colors } from "../../styles";

export const Imagem = styled.div`
    position: relative;
    background-size: cover;
    height: 280px;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 170px;
    font-size: 32px;
    font-weight: 100;

    &::before{
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: 0;
        inset:0;
    }

    p, h2{
        position: relative;
        z-index: 1;
        color: ${colors.white};
    }

    h2{
        font-weight: 900;
    }
`
