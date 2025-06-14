import { useParams } from 'react-router-dom'
import Cardapio from '../Cards/Cardapio'
import { ListCard } from './styles'
import { useEffect, useState } from 'react'

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
    const [produtos, setProdutos ] = useState<CardapioItem[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setProdutos(res.cardapio)
        })
    }, [id])
    
    if(!produtos){
        return <h3>Carregando...</h3>
    }

    return (
        <ListCard $estaNaHome={$estaNaHome} $background={$background}>
            {produtos.map((prato) => (
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
    )
}

export default ListaCardapio