import { useParams } from 'react-router-dom'

import Menu from '../Cards/Menu'
import { useGetMenuQuery } from '../../services/apiRestaurant'
import Banner from '../Banner'

import { ListCard } from './styles'
import Loader from '../Loader/Index'

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
    const { data: products, isLoading} = useGetMenuQuery(id!)
    
    if(!products) return <Loader/>
    
    return (
        <>
            <Banner type={products.tipo} title={products.titulo} />
            <div className="container">
                <ListCard $itsHome={$itsHome} $background={$background}>
                     {products.cardapio.map((plate) => (
                        <Menu isLoading={isLoading} key={plate.id} plate={plate} />
                    ))} 
                </ListCard>
            </div>
        </>
    )
}

export default ListMenu