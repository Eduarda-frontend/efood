import { useParams } from 'react-router-dom'

import Cardapio from '../Cards/Cardapio'
import { ListCard } from './styles'
import { useGetCardapioQuery } from '../../services/api'
import Banner from '../Banner'

export type Props = {
    $background: 'white' | 'orange_rose'
    $estaNaHome: boolean
}

export type CardapioItem = {
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
    id: number
  }


const ListaCardapio = ( { $background, $estaNaHome } : Props) => {
    const { id } = useParams()
    const { data: produtos} = useGetCardapioQuery(id!)
    
    if(!produtos) return <h3>Carregando...</h3>
    
    return (
        <>
            <Banner tipo={produtos.tipo} titulo={produtos.titulo} />
            <div className="container">
                <ListCard $estaNaHome={$estaNaHome} $background={$background}>
                    {produtos.cardapio.map((prato) => (
                        <li key={prato.id}>
                            <Cardapio prato={prato} />
                        </li>
                    ))}
                </ListCard>
            </div>
        </>
    )
}

export default ListaCardapio