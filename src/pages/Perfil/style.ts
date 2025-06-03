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