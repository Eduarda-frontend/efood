import ListaDeProdutos from "../../components/ListaDeProdutos"
import Pratos from "../../models/Produto"
import logo from '../../assets/logo.png'
import japonese  from '../../assets/japonese.png'
import italian  from '../../assets/italian.png'
import Header from "../../components/Header"

const produtos: Pratos[] = [
    {
        titulo: 'Hioki Sushi ',
        descricao:' Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        imagem: japonese,
        tipoCulinaria: 'Japonesa',
        categoria: 'Destaque da semana',
        nota: '4.9',
        id:1
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        descricao:'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: italian,
        tipoCulinaria: 'Italiana',
        nota: '4.6',
        id:2
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        descricao:'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: italian,
        tipoCulinaria: 'Italiana',
        nota: '4.6',
        id:3
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        descricao:'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: italian,
        tipoCulinaria: 'Italiana',
        nota: '4.6',
        id:4
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        descricao:'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: italian,
        tipoCulinaria: 'Italiana',
        nota: '4.6',
        id:5
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        descricao:'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: italian,
        tipoCulinaria: 'Italiana',
        nota: '4.6',
        id:6
    }
]

const Home = () => (
    <>
        <Header>
            <img src={logo} alt="Logo efood" />
            <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </Header>
        <div className="container">
            <ListaDeProdutos $background="white" itens={produtos} />
        </div>  
    </>
)

export default Home