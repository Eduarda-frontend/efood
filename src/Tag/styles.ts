import styled from "styled-components"
import { colors } from "../styles"
import type { Props } from "."

export const TagContainer = styled.div<Props>`
    display: inline-block;
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: bold;
    background-color: ${colors.orange_rose};
    color: ${colors.white};
    margin-top: 16px;
    padding: 6px 4px;

    
`