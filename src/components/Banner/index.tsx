import bannerImg from '../../assets/italian.png'
import { Div, Image } from './styles'

type Props = {
    title: string
    type: string
}

const Banner = ( { title, type } : Props) => (

    <Image className='divFlex' style={{backgroundImage: `url(${bannerImg})` }}>
        <Div className="container">
            <p>{type}</p>
            <h2>{title}</h2>
        </Div> 
    </Image>


)

export default Banner