import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBar = styled.header<{$estaNaHome: boolean}>`
    height: ${({ $estaNaHome }) => ($estaNaHome ? '384px' : '186px')};
    text-align: center;
    flex-direction: ${({ $estaNaHome }) => ($estaNaHome ? 'column' : 'row')};
    justify-content: space-around;
    align-items: center;
    font-size:${({ $estaNaHome }) => ($estaNaHome ? '36px' : '18px;')};
    font-weight: 900;
    color: ${colors.orange_rose};

    p{
        width:${({ $estaNaHome }) => ($estaNaHome ? '544px' : 'auto')};
    }
`
