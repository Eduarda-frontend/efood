import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

import { FooterContain, ListSocialMedia } from './styles'

const Footer = () => (
    <FooterContain className='divFlex'>
        <img src={logo} alt="Efood" />
            <ListSocialMedia className='divFlex'>
                <li>
                    <a href="#"> 
                        <img src={instagram} alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src={facebook} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src={twitter} alt="twitter" />
                    </a>
                </li>
            </ListSocialMedia>
        <div>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </div>
    </FooterContain>
)

export default Footer