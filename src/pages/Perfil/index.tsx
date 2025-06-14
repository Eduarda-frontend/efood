import Header from "../../components/Header"
import logo from '../../assets/logo.png'
import Banner from "../../components/Banner"
import { Div, LinkIten } from "./style"
import ListaCardapio from "../../components/Listas/ListaCardapio"

const Perfil = () => {
    return (
        <>
            <Header > 
                <Div className="container">
                    <LinkIten to="/">Restaurantes</LinkIten>
                    <img src={logo} alt="Logo efood" />
                    <p>0 produto(s) no carrinho</p>
                </Div>
            </Header>
            <Banner/>
            <div className="container">
                <ListaCardapio $background={"orange_rose"} $estaNaHome={false}    />
            </div>
        </>
    )
}





export default Perfil