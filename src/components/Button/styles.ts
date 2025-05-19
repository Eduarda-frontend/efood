import { Link } from "react-router-dom"
import styled from "styled-components"
import type { Props } from "../../Tag"

export const ButtonLink = styled(Link)<Props>`
    text-decoration: none;
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: bold;
    margin-bottom: 8px;
    padding: 4px 6px;
    display: inline-block;
    text-align: center;
`