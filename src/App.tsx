import { BrowserRouter } from "react-router-dom"
import EstiloGlobal from "./styles"
import Rotas from "./routes"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./store"
import Carrinho from "./components/Carrinho"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas/>
        <Footer />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

export default App
