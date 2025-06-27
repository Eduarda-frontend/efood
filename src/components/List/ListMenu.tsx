import { useParams } from 'react-router-dom'

import Menu from '../Cards/Menu'
import { useGetMenuQuery } from '../../services/api'
import Banner from '../Banner'

import { ListCard } from './styles'

export type Props = {
    $background: 'white' | 'orange_rose'
    $itsHome: boolean
}

export type MenuItem = {
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
    id: number
  }

const ListMenu = ( { $background, $itsHome } : Props) => {
    const { id } = useParams()
    const { data: products} = useGetMenuQuery(id!)
    
    if(!products) return <h3>Carregando...</h3>
    
    return (
        <>
            <Banner type={products.tipo} title={products.titulo} />
            <div className="container">
                <ListCard $itsHome={$itsHome} $background={$background}>
                     {products.cardapio.map((plate) => (
                        <Menu key={plate.id} plate={plate} />
                    ))} 
                </ListCard>
            </div>
        </>
    )
}

export default ListMenu