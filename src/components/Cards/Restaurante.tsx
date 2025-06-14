import Tag from "../../Tag"
import { Card, CardText, Star, InfoMain, Infos, Nota } from "./styles"

import star from '../../assets/star.png'
import Button from "../Button"

type Props = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    infos: string[]
    capa: string 
}

const Restaurante = ({
    avaliacao,
    capa,
    descricao,
    infos,
    id,
    titulo
} : Props) => {

    const getDescricao = (descricao: string) => {
        if(descricao.length > 250) {
            return descricao.slice(0 , 247) + '...'
        }
        return descricao
    }

    return(
        
        <Card>
            <img className="img"  src={capa} alt={titulo} />
            <Infos>
                {infos.map((info) => (
                    <Tag size="small" key={info}>{info}</Tag>
                ))}
            </Infos>
                <CardText>
                    <InfoMain>
                        <h2>{titulo}</h2>
                        <Nota>
                            <span>{avaliacao}</span>      
                            <Star src={star} alt="estrela" />
                        </Nota>
                    </InfoMain>
                    <p>{getDescricao(descricao)}</p>
                    <Button to={`/perfil/${id}`} size={"small"}>
                        Saiba mais
                    </Button>
                </CardText>
        </Card>
    )
}

export default Restaurante