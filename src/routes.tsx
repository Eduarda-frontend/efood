import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const Rotas = () => (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/perfil/:id' element={ <Profile /> } />

    </Routes>
)

export default Rotas