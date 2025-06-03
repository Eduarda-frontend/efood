import styled from "styled-components"
import { colors } from "../../styles"

export const FooterContain = styled.footer`
    display: flex;
    height: 298px;
    background-color: ${colors.light_orange};
    color: ${colors.orange_rose};
    text-align: center;
    padding: 40px 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;

    div{
        width: 480px;
        margin-top: 40px;
        text-align: center;
    }
`

export const ListSocialMedia = styled.ul`
    display: flex;
    justify-content: center;
    gap: 8px;

    li{
      list-style: none;  
    }
`