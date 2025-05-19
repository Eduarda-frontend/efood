import styled from "styled-components"
import { colors } from "../../styles"
import type { Props } from "."
import { Card, Star } from "../Prato/styles"
import { ButtonLink } from "../Button/styles"

export const ListCard = styled.ul<Omit<Props, 'itens'>>`
    display: grid;
    justify-items: center;
    column-gap: 80px;
    row-gap: 48px;
    list-style: none;
    font-size : 14px;
    grid-template-columns: ${(props) => props.$background === 'white' ? '1fr 1fr' : '1fr 1fr 1fr'};

    ${Card} {
        background-color: ${(props) => props.$background === 'white' ? colors.white : colors.orange_rose};
        color: ${(props) => props.$background === 'white' ? colors.orange_rose : colors.light_orange};

        ${ButtonLink}{
            ${({ $background }) => {
                const isWhite = $background === 'white';
                return`
                    background-color: ${isWhite ? colors.orange_rose : colors.light_orange};
                    color: ${isWhite ? colors.white : colors.orange_rose};
                    display: ${isWhite ? 'inline-block' : 'block'};
                `
            }}
        }

        ${Star}{
            display: ${(props) => props.$background === 'white' ? 'inline' : 'none'};
        }
    }

    img{
        width:100%;
    }

    @media (max-width: 680px){
        grid-template-columns: 1fr;

    }

`