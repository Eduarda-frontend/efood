import { ButtonLink } from "../Button/styles"
import { Card, CardText, InfoMain } from "./styles"

type Props = {
    id: number
    nome: string
    descricao: string
    foto: string 
}

const Cardapio = ({
    nome,
    foto,
    descricao,
} : Props) => {
    const getDescricao = (descricao: string) => {
        if(descricao.length > 150) {
            return descricao.slice(0 , 147) + '...'
        }
        return descricao
    }

    return(    
        <Card>
            <CardText>
                <img className="img" src={foto} alt={nome} />
                <InfoMain>
                    <h2>{nome}</h2>
                </InfoMain>
                <p>{getDescricao(descricao)}</p>
                <ButtonLink to={`/home`}  size={"big"}> Adicionar ao carrinho </ButtonLink>
            </CardText>
        </Card>
    )
}

export default Cardapio