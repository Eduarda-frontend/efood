/* eslint-disable react-refresh/only-export-components */
import { useState } from "react"
import { Card, CardText, DivTexto, ImgModal, InfoMain, Modal, ModalContent, TituloModal } from "./styles"
import { ButtonStyled } from "../Button/styles"

import fechar from '../../assets/fechar.png'

type Props = {
    id: number
    nome: string
    descricao: string
    foto: string 
    porcao?: string
    preco?: number
}

interface ModalProps extends Props {
    estaVisivel: boolean
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL'
    }).format(preco)
}

const Cardapio = ({
    nome,
    foto,
    descricao,  
    id,
    preco,
    porcao
} : Props) => {
    const getDescricao = (descricao: string) => {
        if(descricao.length > 150) {
            return descricao.slice(0 , 147) + '...'
        }
        return descricao
    }
    const [ modal, setModal] = useState<ModalProps>({
        estaVisivel: false,
        id: 0,
        nome: '',
        foto:'',
        descricao:''
    })

    const fecharModal = () => {
        setModal({
            estaVisivel: false,
            id: 0,
            nome: '',
            foto:'',
            descricao:''
        })
    }

    return( 
        <>
            <Card>
                <CardText>
                    <img className="img" src={foto} alt={nome} />
                    <InfoMain>
                        <h2 className="titulo">{nome}</h2>
                    </InfoMain>
                    <p>{getDescricao(descricao)}</p>
                    <ButtonStyled onClick={() => {setModal({
                            estaVisivel: true,
                            id:id,
                            nome: nome,
                            foto:foto,
                            descricao:descricao
                    })}}> Adicionar ao carrinho </ButtonStyled>
                </CardText>
            </Card>
                <Modal className={modal.estaVisivel ? 'show' : ''}>
                    <ModalContent>
                        <img
                        src={fechar}
                        alt="Ícone de fechar"
                        onClick={() => {
                            fecharModal()
                        }} />
                        <div>
                            <ImgModal src={foto} alt={nome} />
                            <div>
                                <TituloModal>{nome}</TituloModal>
                                <DivTexto>                        
                                    <p>{descricao} </p> 
                                    <p>{porcao?.includes(' a ') ? `Serve: de  ${porcao}` : `Serve: ${porcao}` }</p>
                                </DivTexto>
                                <ButtonStyled onClick={() => {setModal({
                                        estaVisivel: true,
                                        id:id,
                                        nome: nome,
                                        foto:foto,
                                        descricao:descricao
                                })}}> Adicionar ao carrinho {formataPreco(preco)} </ButtonStyled>
                            </div>
                        </div>
                    </ModalContent>
                    <div onClick={() => {
                        fecharModal()
                    }}
                    className="overlay">
                    </div>
                </Modal>
            </>
    )
}

export default Cardapio