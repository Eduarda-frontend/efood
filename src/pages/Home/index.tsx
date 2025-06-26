import ListRestaurant from "../../components/List/ListRestaurant"
import logo from '../../assets/logo.png'
import Header from "../../components/Header"
import { useGetPlateQuery } from "../../services/api"

const Home = () => {
    const { data: products } = useGetPlateQuery()

    if(!products){
       return <h4>Carregando...</h4>
    }

    return (
        <>
            <Header>
                <img src={logo} alt="Logo efood" />
                <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </Header>
            <ListRestaurant $itsHome $background="white" items={products} />
        </>
    )
}

export default Home