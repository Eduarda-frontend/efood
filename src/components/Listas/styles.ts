    import styled from "styled-components"
import { colors } from "../../styles"
import type { Props } from "./ListaRestaurantes"
import { Card, Star } from "../Cards/styles"
import { ButtonLink } from "../Button/styles"

export const ListCard = styled.ul<Omit<Props, 'itens'>>`
    display: grid;
    justify-items: center;
    margin-top:${({ $estaNaHome }) => ($estaNaHome ? '5rem' : '2rem')};
    margin-bottom: 120px;
    column-gap: ${({ $estaNaHome }) => ($estaNaHome ? '5rem' : '2rem')};
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

    .img{
        width:100%;
        max-width: ${({ $estaNaHome }) => ($estaNaHome ? '29.5rem' : '19rem')};
        height: ${({ $estaNaHome }) => ($estaNaHome ? '13.5rem' : '10.4rem')};
        object-fit: cover;
    }

    @media (max-width: 680px){
        grid-template-columns: 1fr;

    }

`