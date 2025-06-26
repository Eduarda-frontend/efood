import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "./store"
import Rotas from "./routes"

import Aside from "./components/Aside"
import Footer from "./components/Footer"

import EstiloGlobal from "./styles"


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas/>
        <Footer />
        <Aside />
      </BrowserRouter>
    </Provider>
  )
}

export default App
