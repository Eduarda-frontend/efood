import { useDispatch, useSelector } from "react-redux"

import type { RootReducer } from "../../store"
import { open } from "../../store/reducer/cart"

import Header from "../../components/Header"
import ListMenu from "../../components/List/ListMenu"

import logo from '../../assets/logo.png'

import { ButtonCart, Div, LinkIten } from "./style"

const Profile = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => dispatch(open())

    return (
        <>
            <Header > 
                <Div className="container">
                    <LinkIten to="/">Restaurantes</LinkIten>
                    <img src={logo} alt="Logo efood" />
                    <ButtonCart onClick={openCart}> {items.length} produtos no carrinho </ButtonCart>
                </Div>
            </Header>
            <ListMenu $background={"orange_rose"} $itsHome={false}    />
        </>
    )
}





export default Profile