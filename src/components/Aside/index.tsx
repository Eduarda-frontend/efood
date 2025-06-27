import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

import type { RootReducer } from "../../store"
import { formatPrice, getTotalValue } from "../../utils"
import { close } from "../../store/reducer/cart"

import Cart from "../Cart/Cart"
import FormCard from "../Checkout/Form"

import * as S from "./styles"

const Aside = ( ) => {
    const dispatch = useDispatch();
    const { items, isOpen} = useSelector((state: RootReducer) => state.cart)
    const [ stage, setStage ] = useState<'cart' | 'checkout'>('cart')

    const closeCart = () => dispatch(close())

    return(
        <S.AsideContainer className={isOpen? 'show' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Div>   
                {stage === 'cart' && (
                    items.length > 0 ? (
                        <Cart price={formatPrice(getTotalValue(items))} stageCheckout={() => setStage('checkout')} />      
                    ) : (
                        <p>O carrinho está vazio, adicione pelo menos um produto para continuar com a compra.</p>)
                )}

                {stage === 'checkout' &&(
                    <FormCard stageCart={() => setStage('cart')} price={formatPrice(getTotalValue(items))}/>
                )}
        </S.Div>
        </S.AsideContainer>
    )
}

export default Aside