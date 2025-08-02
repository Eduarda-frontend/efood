import { ButtonStyled } from "../Button/styles";
import { DivText, Modal, ModalContent } from "./styles";

type ModalAviso = {
    isOpen: boolean;
    cepError: string;
    closeModal: () => void;
}

const ModalAviso = ( { isOpen, cepError, closeModal }: ModalAviso ) => {
    if (!isOpen) return null;
    
    return (
        <Modal className="show" onClick={closeModal}>
            <ModalContent $alert={false}>
                <DivText>
                    <p>{cepError}</p>
                </DivText>
                <ButtonStyled title="Clique para fechar" onClick={closeModal}>Fechar</ButtonStyled>
            </ModalContent>
        </Modal>
    )
}

export default ModalAviso