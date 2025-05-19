import Tag from "../../Tag"
import { Card, CardText, Star, InfoMain, Infos } from "./styles"

import star from '../../assets/star.png'
import Button from "../Button"
import { useLocation } from "react-router-dom"

type Props = {
    titulo: string
    descricao: string
    imagem: string
    tipoCulinaria: string
    categoria?: string
    nota: string
}

const Plate = ({
    titulo,
    descricao,
    imagem,
    tipoCulinaria,
    categoria,
    nota,
} : Props) => {
    const location = useLocation()
    const estaNaHome = location.pathname === '/'
    return(

    <Card>
            <img src={imagem} alt={titulo} />
            <Infos className="divFlex">
                {categoria && <Tag size="small">{categoria}</Tag>}
                {tipoCulinaria && <Tag size="small">{tipoCulinaria}</Tag>}
            </Infos>
        <CardText>
            <InfoMain className="divFlex">
                <h2>{titulo}</h2>
                <div className="divFlex">
                    <span>{nota}</span>      
                    <Star src={star} alt="estrela" />
                </div>
            </InfoMain>
            <p>{descricao}</p>
            <Button to={`/perfil`}>
                {estaNaHome ? 'Saiba mais' : 'Adicionar ao carrinho'}
            </Button>
        </CardText>
    </Card>
    )
}

export default Plate