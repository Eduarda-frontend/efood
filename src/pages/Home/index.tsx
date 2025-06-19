import ListaDeProdutos from "../../components/Listas/ListaRestaurantes"
import logo from '../../assets/logo.png'
import Header from "../../components/Header"
import { useGetPratosQuery } from "../../services/api"


const Home = () => {
    const { data: produtos } = useGetPratosQuery()

    if(!produtos){
       return <h4>Carregando...</h4>
    }

    return (
        <>
        <Header>
            <img src={logo} alt="Logo efood" />
            <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </Header>
        <div className="container">
            <ListaDeProdutos $estaNaHome $background="white" itens={produtos} />
        </div>  
    </>
    )
}

export default Home