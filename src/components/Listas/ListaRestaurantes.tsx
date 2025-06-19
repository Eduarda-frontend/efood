import Restaurante from '../Cards/Restaurante'
import type { CardapioItem } from './ListaCardapio'
import { ListCard } from './styles'

export type Props = {
    itens: RestauranteItem[]
    $background: 'white' | 'orange_rose'
    $estaNaHome: boolean
}

export type RestauranteItem = {
    id: number
    titulo: string
    destacado?: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: CardapioItem[]
}

const ListaDeRestaurantes = ( {itens, $background, $estaNaHome } : Props) => {
    const getPratoTags = (prato:RestauranteItem) => {
        const tags = []

        if(prato.tipo) {
            tags.push(prato.tipo)
        }

        if(prato.destacado) {
            tags.push('Destaque da semana')
        }
        return tags
    }

    return (
        <div className="container">
            <ListCard $estaNaHome={$estaNaHome} $background={$background}>
            {itens.map((restaurante) => (
                <li key={restaurante.id}>
                    <Restaurante restaurante={restaurante} infos={getPratoTags(restaurante)} />
                </li>
            ))}
            </ListCard>
        </div>
    )
}

export default ListaDeRestaurantes