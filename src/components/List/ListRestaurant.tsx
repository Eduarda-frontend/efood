import { useGetPlateQuery } from '../../services/api'
import Restaurant from '../Cards/Restaurant'
import Loader from '../Loader/Index'
import type { MenuItem } from './ListMenu'
import { ListCard } from './styles'

export type Props = {
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


const ListRestaurant = ( {$background, $itsHome } : Props) => {
    const { data: products, isLoading } = useGetPlateQuery()

    if(!products){
       return  <Loader />
    }

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
            {products.map((restaurant) => (
                <Restaurant key={restaurant.id} restaurant={restaurant} infos={getPlateTags(restaurant)} isLoading={isLoading} />
            ))}
            </ListCard>
        </div>
    )
}

export default ListRestaurant