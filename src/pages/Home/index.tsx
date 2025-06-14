import ListaDeProdutos, { type Prato } from "../../components/Listas/ListaRestaurantes"
import logo from '../../assets/logo.png'
import Header from "../../components/Header"
import { useEffect, useState } from "react"


const Home = () => {
    const [produtos, setProdutos ] = useState<Prato[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) =>setProdutos(res))
    }, [])

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