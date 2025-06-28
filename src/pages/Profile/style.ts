import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles";

export const LinkIten = styled(Link)`
    color:${colors.orange_rose};
    text-decoration: none;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ButtonCart = styled.button`
    display: flex;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    border: none;
    color:${colors.orange_rose};
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
`