import { useDispatch, useSelector } from "react-redux"

import type { RootReducer } from "../../store"
import { formatPrice } from "../../utils"
import { add, remove } from "../../store/reducer/cart"

import { Item, DivTotalValue, Amount } from './styles'
import { ButtonStyled } from "../Button/styles"

type Props = {
    price: string
    stageCheckout: () => void;
}

const Cart = ( { price, stageCheckout }:Props ) => {
    const dispatch = useDispatch()
    const {items} = useSelector((state: RootReducer) => state.cart)
    
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
                            <Amount>
                                <button onClick={() => dispatch(removeItem(item.id))}> - </button>
                                <p>{item.amount}</p>
                                <button  onClick={() => dispatch(add(item))}> + </button>
                            </Amount>
                        </div>
                        <button onClick={() => removeItem(item.id)} type="button"/>
                    </Item>
                ))}
            </ul>
            <DivTotalValue>
                <p>Valor total</p>
                <span>{price}</span>
            </DivTotalValue>
            <div>
                <ButtonStyled title="Clique para continuar com a entrega" type="button" onClick={stageCheckout}> Continuar com a entrega </ButtonStyled>
            </div>
        </>            

    )
}

export default Cart