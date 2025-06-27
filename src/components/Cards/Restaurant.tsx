import Tag from "../../Tag"
import * as S from "./styles"

import star from '../../assets/star.png'

import ButtonLink from "../Button"

import type { RestaurantItem } from "../List/ListRestaurant"

type RestaurantItemProps = {
    restaurant: RestaurantItem
    infos: string[]
}

const Restaurant = ({ restaurant, infos } : RestaurantItemProps) => {

    const getDescription = (description: string) => {
        return description.length > 250 ? description.slice(0 , 247) + '...' : description 
    }

    return(  
        <S.Card>
            <img className="img"  src={restaurant.capa} alt={restaurant.titulo} />
            <S.Infos>
                {infos.map((info) => (
                    <Tag size="small" key={info}>{info}</Tag>
                ))}
            </S.Infos>
            <S.CardText>
                <S.InfoMain>
                    <h2 className="title">{restaurant.titulo}</h2>
                    <S.Nota>
                        <span>{restaurant.avaliacao}</span>      
                        <S.Star src={star} alt="estrela" />
                    </S.Nota>
                </S.InfoMain>
                <p>{getDescription(restaurant.descricao)}</p>
                <ButtonLink title='Ver o menu completo' to={`/perfil/${restaurant.id}`}> Saiba mais </ButtonLink>
            </S.CardText>
        </S.Card>
    )
}

export default Restaurant