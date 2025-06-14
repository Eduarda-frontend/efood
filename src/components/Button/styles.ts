import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { colors } from "../../styles"

const button = css`
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 4px 6px;
    text-align: center;
    border: none;
    cursor: pointer;
`

export const ButtonLink = styled(Link)`
    ${button}
    background-color: ${colors.orange_rose};
    color: ${colors.white};
    display: inline-block;
`

export const ButtonStyled = styled.button`
    ${button}
    background-color: ${colors.light_orange};
    color: ${colors.orange_rose};
`