import Restaurant from '../Cards/Restaurant'
import type { MenuItem } from './ListMenu'
import { ListCard } from './styles'

export type Props = {
    items: RestaurantItem[]
    $background: 'white' | 'orange_rose'
    $itsHome: boolean
}

export type RestaurantItem = {
    id: number
    titulo: string
    destacado?: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuItem[]
}

const ListRestaurant = ( {items, $background, $itsHome } : Props) => {
    const getPlateTags = (plate:RestaurantItem) => {
        const tags = []

        if(plate.tipo) {
            tags.push(plate.tipo)
        }

        if(plate.destacado) {
            tags.push('Destaque da semana')
        }
        return tags
    }

    return (
        <div className="container">
            <ListCard $itsHome={$itsHome} $background={$background}>
            {items.map((restaurant) => (
                <Restaurant key={restaurant.id} restaurant={restaurant} infos={getPlateTags(restaurant)} />
            ))}
            </ListCard>
        </div>
    )
}

export default ListRestaurant