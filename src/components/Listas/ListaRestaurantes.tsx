import Restaurante from '../Cards/Restaurante'
import type { CardapioItem } from './ListaCardapio'
import { ListCard } from './styles'

export type Props = {
    itens: Prato[]
    $background: 'white' | 'orange_rose'
    $estaNaHome: boolean
}

export type Prato = {
    id: number
    titulo: string
    destacado?: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: CardapioItem[]
}

const ListaDeProdutos = ( {itens, $background, $estaNaHome } : Props) => {
    const getPratoTags = (prato:Prato) => {
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
        <ListCard $estaNaHome={$estaNaHome} $background={$background}>
        {itens.map((produto) => (
            <Restaurante 
                key={produto.id}
                id={produto.id}
                capa={produto.capa}
                infos={getPratoTags(produto)}
                titulo={produto.titulo}
                avaliacao={produto.avaliacao ?? null}
                tipo={produto.tipo ?? ''}
                destacado={produto.destacado ?? false}
                descricao={produto.descricao} 
            />
        ))}
        </ListCard>
    )
}

export default ListaDeProdutos