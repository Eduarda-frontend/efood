import Header from "../../components/Header"
import logo from '../../assets/logo.png'
import { BotaoCarrinho, Div, LinkIten } from "./style"
import ListaCardapio from "../../components/Listas/ListaCardapio"
import type { RootReducer } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { abrir } from "../../store/reducer/carrinho"

const Perfil = () => {
    const dispatch = useDispatch()
    const { itens } = useSelector((state: RootReducer) => state.carrinho)

    const abrirCarrinho = () => dispatch(abrir())

    return (
        <>
            <Header > 
                <Div className="container">
                    <LinkIten to="/">Restaurantes</LinkIten>
                    <img src={logo} alt="Logo efood" />
                    <BotaoCarrinho onClick={abrirCarrinho}> {itens.length} produtos no carrinho </BotaoCarrinho>
                </Div>
            </Header>
            <ListaCardapio $background={"orange_rose"} $estaNaHome={false}    />
        </>
    )
}





export default Perfil