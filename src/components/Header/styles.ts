import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBar = styled.header<{$itsHome: boolean}>`
    display:flex;
    height: ${({ $itsHome }) => ($itsHome ? '384px' : '186px')};
    text-align: center;
    flex-direction: ${({ $itsHome }) => ($itsHome ? 'column' : 'row')};
    justify-content: space-around;
    align-items: center;
    font-size:${({ $itsHome }) => ($itsHome ? '36px' : '18px;')};
    font-weight: 900;
    color: ${colors.orange_rose};

    p{
        width:${({ $itsHome }) => ($itsHome ? '544px' : 'auto')};
    }
`
