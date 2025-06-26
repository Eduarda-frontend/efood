import { useState } from "react"
import { useDispatch } from "react-redux"

import { add } from "../../store/reducer/cart"
import type { MenuItem } from "../List/ListMenu"
import { formatPrice } from "../../utils"

import close from '../../assets/close.png'

import * as S from "./styles"
import { ButtonStyled } from "../Button/styles"

type MenuProps = {
    plate: MenuItem
  }

const getDescription = (description: string) => {
    return description.length > 150 ? description.slice(0, 147) + '...' : description
}

const Menu = ({ plate } : MenuProps) => {
    const dispatch = useDispatch()
    const [ modalIsVisible, setModalIsVisible] = useState(false)

    const openModal = () => setModalIsVisible(true)
    const closeModal = () => setModalIsVisible(false)
    const addCart = () => {
        dispatch(add(plate))
        closeModal()
    }

    return( 
        <>
            <S.Card>
                <S.CardText>
                    <img className="img" src={plate.foto} alt={plate.nome} />
                    <S.InfoMain>
                        <h2 className="title">{plate.nome}</h2>
                    </S.InfoMain>
                    <p>{getDescription(plate.descricao)}</p>
                    <ButtonStyled onClick={openModal}> Mais Detalhes </ButtonStyled>
                </S.CardText>
            </S.Card>
                <S.Modal className={modalIsVisible ? 'show' : ''}>
                    <S.ModalContent>
                        <img
                        src={close}
                        alt="Ícone de fechar"
                        onClick={closeModal} />
                        <div>
                            <S.ImgModal src={plate.foto} alt={plate.nome} />
                            <div>
                                <S.TitleModal>{plate.nome}</S.TitleModal>
                                <S.DivText>                        
                                    <p>{plate.descricao} </p> 
                                    <p>{plate.porcao?.includes(' a ') ? `Serve: de  ${plate.porcao}` : `Serve: ${plate.porcao}` }</p>
                                </S.DivText>
                                <ButtonStyled onClick={addCart}> Adicionar ao carrinho {formatPrice(plate.preco)} </ButtonStyled>
                            </div>
                        </div>
                    </S.ModalContent>
                    <div onClick={closeModal}
                    className="overlay">
                    </div>
                </S.Modal>
        </>
    )
}

export default Menu