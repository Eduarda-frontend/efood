import type { MenuItem } from "../List/ListMenu"
import { formatPrice } from "../../utils"

import close from '../../assets/close.png'

import * as S from './styles'
import { ButtonStyled } from "../Button/styles"

type ModalProps = {
    modalIsVisible: boolean
    addItem: boolean
    plate: MenuItem
    closeModal: () => void
    addCart: () => void
}

const Modal = ( {  
    modalIsVisible,
    addItem,
    plate,
    closeModal,
    addCart,
    }: ModalProps ) => {

    return(
        <S.Modal className={modalIsVisible ? 'show' : ''}>
        <S.Aviso className={addItem ? 'warning' : ''}> +1 produto foi adicionado ao carrinho</S.Aviso>
            <S.ModalContent $alert={true}>
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
                        <ButtonStyled title="Clique aqui para adicionar ao carrinho" onClick={addCart}> Adicionar ao carrinho {formatPrice(plate.preco)} </ButtonStyled>
                    </div>
                </div>
            </S.ModalContent>
            <div onClick={closeModal}
            className="overlay">
            </div>
        </S.Modal>
    )
}

export default Modal