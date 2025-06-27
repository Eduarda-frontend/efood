import ListRestaurant from "../../components/List/ListRestaurant"
import logo from '../../assets/logo.png'
import Header from "../../components/Header"
const Home = () => {

    return (
        <>
            <Header>
                <img src={logo} alt="Logo efood" />
                <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </Header>
            <ListRestaurant $itsHome $background="white" />
        </>
    )
}

export default Home