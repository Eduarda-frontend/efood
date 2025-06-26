import { useLocation } from 'react-router-dom'

import vetorimg from '../../assets/vector.png'

import { HeaderBar } from './styles'

export type Props = {
    children: React.ReactNode
}

const Header = ( { children } : Props) => {

    const location = useLocation()
    const itsHome = location.pathname === '/'

    return(

        <HeaderBar className='divFlex' $itsHome={itsHome} style={{backgroundImage: `url(${vetorimg})` }}>
            {children}
        </HeaderBar>
    )

}

export default Header