import { useDispatch, useSelector } from "react-redux"

import type { RootReducer } from "../../store"
import { formatPrice } from "../../utils"
import { remove } from "../../store/reducer/cart"

import { Item, DivAside } from "./styles"

type Props = {
    price: string
}

const Cart = ( { price }:Props ) => {
    const dispatch = useDispatch()
    const { items} = useSelector((state: RootReducer) => state.cart)
    
    const removeItem = (id: number) => dispatch(remove(id))

    return(
        <>
            <ul>
                {items.map((item) => (
                    <Item key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                            <h3>{item.nome}</h3>
                            <span>{formatPrice(item.preco)}</span>
                        </div>
                        <button onClick={() => removeItem(item.id)} type="button"></button>
                    </Item>
                ))}
            </ul>
            <DivAside>
                <p>Valor total</p>
                <span>{price}</span>
            </DivAside>
        </>            

    )
}

export default Cart