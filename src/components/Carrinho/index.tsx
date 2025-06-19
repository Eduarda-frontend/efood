import { useDispatch, useSelector } from "react-redux"
import type { RootReducer } from "../../store"
import { formataPreco } from "../Cards/Cardapio"
import { CarrinhoContainer, Aside, Item, Overlay, DivAside } from "./styles"
import { fechar, remover } from "../../store/reducer/carrinho"
import { ButtonLink } from "../Button/styles"

const Carrinho = () => {
    const dispatch = useDispatch()
    const { itens, isOpen} = useSelector((state: RootReducer) => state.carrinho)
    
    const getValorTotal = () => {
        return itens.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)
        }, 0)
    }
    const fecharCarrinho = () => dispatch(fechar())
    const removerItem = (id: number) => dispatch(remover(id))

    return(
        <CarrinhoContainer className={isOpen? 'show' : ''}>
            <Overlay onClick={fecharCarrinho} />
            <Aside>
                <ul>
                    {itens.map((item) => (
                        <Item>
                            <img src={item.foto} alt={item.nome} />                     
                            <div key={item.id}>
                                <h3>{item.nome}</h3>
                                <span>{formataPreco(item.preco)}</span>
                            </div>
                            <button onClick={() => removerItem(item.id)} type="button"></button>
                        </Item>
                    ))}             
                </ul>
                <DivAside>
                    <p>Valor total</p>
                    <span>{formataPreco(getValorTotal())}</span>
                </DivAside>
                <ButtonLink to='#'> Continuar com a entrega </ButtonLink>
            </Aside>
        </CarrinhoContainer>
    )
}

export default Carrinho