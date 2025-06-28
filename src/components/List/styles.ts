    import styled from "styled-components"
import { breackpoints, colors } from "../../styles"
import type { Props } from "./ListRestaurant"
import { Card, Star } from "../Cards/styles"

export const ListCard = styled.ul<Omit<Props, 'items'>>`
    display: grid;
    justify-items: center;
    margin-top:${({ $itsHome }) => ($itsHome ? '5rem' : '2rem')};
    margin-bottom: 120px;
    gap: ${({ $itsHome }) => ($itsHome ? '5rem' : '2rem')};
    row-gap: ${({ $itsHome }) => ($itsHome ? '3rem' : '2rem')};
    list-style: none;
    font-size : 14px;
    grid-template-columns: ${(props) => props.$background === 'white' ? '1fr 1fr' : '1fr 1fr 1fr'};

    ${Card} {
        background-color: ${(props) => props.$background === 'white' ? colors.white : colors.orange_rose};
        color: ${(props) => props.$background === 'white' ? colors.orange_rose : colors.light_orange};

        ${Star}{
            display: ${(props) => props.$background === 'white' ? 'inline' : 'none'};
        }
    }

    .img{
        width:100%;
        max-width: ${({ $itsHome }) => ($itsHome ? '29.5rem' : '19rem')};
        height: ${({ $itsHome }) => ($itsHome ? '13.5rem' : '10.4rem')};
        object-fit: cover;
    }

    @media (max-width: ${breackpoints.tablet}){
        grid-template-columns: 1fr;

        .img{
            max-width: 100%;
        }

    }

    .title{
        font-size:  ${({ $itsHome }) => ($itsHome ? '18px' : '16px')}; 
        margin-top: 8px;    
    }
`