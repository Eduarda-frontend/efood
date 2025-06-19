import bannerImg from '../../assets/italian.png'
import { Div, Imagem } from './styles'

type Props = {
    titulo: string
    tipo: string
}

const Banner = ( { titulo, tipo } : Props) => (

    <Imagem className='divFlex' style={{backgroundImage: `url(${bannerImg})` }}>
        <Div className="container">
            <p>{tipo}</p>
            <h2>{titulo}</h2>
        </Div> 
    </Imagem>


)

export default Banner