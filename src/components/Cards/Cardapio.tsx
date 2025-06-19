/* eslint-disable react-refresh/only-export-components */
import { useState } from "react"
import { Card, CardText, DivTexto, ImgModal, InfoMain, Modal, ModalContent, TituloModal } from "./styles"
import { ButtonStyled } from "../Button/styles"

import fechar from '../../assets/fechar.png'
import { useDispatch } from "react-redux"
import { adicionar } from "../../store/reducer/carrinho"
import type { CardapioItem } from "../Listas/ListaCardapio"

type CardapioProps = {
    prato: CardapioItem
  }

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', { style:'currency',currency:'BRL'}).format(preco)
}

const getDescricao = (descricao: string) => {
    return descricao.length > 150 ? descricao.slice(0, 147) + '...' : descricao
}

const Cardapio = ({ prato } : CardapioProps) => {
    const dispatch = useDispatch()
    const [ modalVisivel, setModalVisivel] = useState(false)

    const abrirMoodal = () => setModalVisivel(true)
    const fecharModal = () => setModalVisivel(false)
    const adicionarAoCarrinho = () => dispatch(adicionar(prato))
    

    return( 
        <>
            <Card>
                <CardText>
                    <img className="img" src={prato.foto} alt={prato.nome} />
                    <InfoMain>
                        <h2 className="titulo">{prato.nome}</h2>
                    </InfoMain>
                    <p>{getDescricao(prato.descricao)}</p>
                    <ButtonStyled onClick={abrirMoodal}> Mais Detalhes </ButtonStyled>
                </CardText>
            </Card>
                <Modal className={modalVisivel ? 'show' : ''}>
                    <ModalContent>
                        <img
                        src={fechar}
                        alt="Ícone de fechar"
                        onClick={fecharModal} />
                        <div>
                            <ImgModal src={prato.foto} alt={prato.nome} />
                            <div>
                                <TituloModal>{prato.nome}</TituloModal>
                                <DivTexto>                        
                                    <p>{prato.descricao} </p> 
                                    <p>{prato.porcao?.includes(' a ') ? `Serve: de  ${prato.porcao}` : `Serve: ${prato.porcao}` }</p>
                                </DivTexto>
                                <ButtonStyled onClick={adicionarAoCarrinho}> Adicionar ao carrinho {formataPreco(prato.preco)} </ButtonStyled>
                            </div>
                        </div>
                    </ModalContent>
                    <div onClick={fecharModal}
                    className="overlay">
                    </div>
                </Modal>
            </>
    )
}

export default Cardapio