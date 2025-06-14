import bannerImg from '../../assets/italian.png'
import { Div, Imagem } from './styles'

const Banner = () => (

    <Imagem className='divFlex' style={{backgroundImage: `url(${bannerImg})` }}>
        <Div className="container">
            <p>Italiana</p>
            <h2>La Dolce Vita Trattoria</h2>
        </Div> 
    </Imagem>


)

export default Banner