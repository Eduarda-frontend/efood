import bannerImg from '../../assets/italian.png'
import { Imagem } from './styles'


const Banner = () => (

    <Imagem className='divFlex' style={{backgroundImage: `url(${bannerImg})` }}>

        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>

    </Imagem>


)

export default Banner