import { useLocation } from 'react-router-dom'

import { HeaderBar } from './styles'
import vetorimg from '../../assets/vector.png'

export type Props = {
    children: React.ReactNode
}

const Header = ( { children } : Props) => {

    const location = useLocation()
    const estaNaHome = location.pathname === '/'

    return(

        <HeaderBar className='divFlex' $estaNaHome={estaNaHome} style={{backgroundImage: `url(${vetorimg})` }}>
            {children}
        </HeaderBar>
    )

}

export default Header