import { useState } from "react"
import { useDispatch } from "react-redux"

import { add } from "../../store/reducer/cart"
import type { MenuItem } from "../List/ListMenu"

import * as S from "./styles"
import { ButtonStyled } from "../Button/styles"
import Loader from "../Loader/Index"
import Modal from "../Modal/Modal"

type MenuProps = {
    plate: MenuItem
    isLoading: boolean
  }

const getDescription = (description: string) => {
    return description.length > 150 ? description.slice(0, 147) + '...' : description
}

const Menu = ({ plate, isLoading } : MenuProps) => {
    const dispatch = useDispatch()
    const [ modalIsVisible, setModalIsVisible] = useState(false)
    const [addItem, setAddItem] = useState(false)

    const openModal = () => setModalIsVisible(true)
    const closeModal = () => setModalIsVisible(false)
    
    const addCart = () => {
        dispatch(add(plate))
        setAddItem(true)

        setTimeout(() => {
            setAddItem(false)
          }, 2000)
    }

    
  if (isLoading) {
    return <Loader />
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
                    <ButtonStyled title="Clique para ver mais detalhes" onClick={openModal}> Mais Detalhes </ButtonStyled>
                </S.CardText>
            </S.Card>
            <Modal
              modalIsVisible={modalIsVisible}
              addItem={addItem}
              plate={plate}
              closeModal={closeModal}
              addCart={addCart}
            />
        </>
    )
}

export default Menu