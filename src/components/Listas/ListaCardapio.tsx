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
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }


const ListaCardapio = ( { $background, $estaNaHome } : Props) => {
    const { id } = useParams()
    const { data: produtos} = useGetCardapioQuery(id!)
    
    if(!produtos){
        return <h3>Carregando...</h3>
    }

    return (
        <>
        <Banner tipo={produtos.tipo} titulo={produtos.titulo} />
        <div className="container">
            <ListCard $estaNaHome={$estaNaHome} $background={$background}>
                {produtos.cardapio.map((prato) => (
                    <Cardapio 
                    key={prato.id}
                    id={prato.id}
                    nome={prato.nome}
                    descricao={prato.descricao}
                    foto={prato.foto}
                    preco={prato.preco}
                    porcao={prato.porcao}
                    />
                ))}
            </ListCard>
        </div>
        </>
    )
}

export default ListaCardapio