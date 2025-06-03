import Header from "../../components/Header"
import ListaDeProdutos from "../../components/ListaDeProdutos"
import Pratos from "../../models/Produto"
import logo from '../../assets/logo.png'
import pizza  from '../../assets/pizza.png'
import Banner from "../../components/Banner"
import { Div, LinkIten } from "./style"

const italiana: Pratos[] = [
    {
        titulo: 'Pizza Marguerita',
        descricao:'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
        id:7
    },
    {
        titulo: 'Pizza Marguerita',
        descricao:'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
        id:8
    },
    {
        titulo: 'Pizza Marguerita',
        descricao:'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
        id:9
    },
    {
        titulo: 'Pizza Marguerita',
        descricao:'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
        id:10
    },
    {
        titulo: 'Pizza Marguerita',
        descricao:'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
        id:11
    },
    {
        titulo: 'Pizza Marguerita',
        descricao:'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
        id:12
    }
]

const Perfil = () => (

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
            <ListaDeProdutos $estaNaHome={false}   $background="orange_rose" itens={italiana} />
        </div>  
    </>

)
export default Perfil