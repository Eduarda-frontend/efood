import Item from '../../models/Produto'
import Plate from '../Prato'
import { ListCard } from './styles'

export type Props = {
    itens: Item[]
    $background: 'white' | 'orange_rose'
}

const ListaDeProdutos = ( {itens, $background } : Props) =>(
        <ListCard $background={$background}>
            {itens.map((produto) => (
                <Plate 
                key={produto.id}
                imagem={produto.imagem}
                titulo={produto.titulo}
                nota={produto.nota ?? ''}
                tipoCulinaria={produto.tipoCulinaria ?? ''}
                categoria={produto.categoria}
                descricao= {produto.descricao}  
                />
            ))}
        </ListCard>
)

export default ListaDeProdutos