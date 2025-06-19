import Tag from "../../Tag"
import { Card, CardText, Star, InfoMain, Infos, Nota } from "./styles"

import star from '../../assets/star.png'
import Button from "../Button"
import type { RestauranteItem } from "../Listas/ListaRestaurantes"

type RestauranteItemProps = {
    restaurante: RestauranteItem
    infos: string[]
}

const Restaurante = ({ restaurante, infos } : RestauranteItemProps) => {

    const getDescricao = (descricao: string) => {
        return descricao.length > 250 ? descricao.slice(0 , 247) + '...' : descricao 
    }

    return(
        
        <Card>
            <img className="img"  src={restaurante.capa} alt={restaurante.titulo} />
            <Infos>
                {infos.map((info) => (
                    <Tag size="small" key={info}>{info}</Tag>
                ))}
            </Infos>
                <CardText>
                    <InfoMain>
                        <h2 className="titulo">{restaurante.titulo}</h2>
                        <Nota>
                            <span>{restaurante.avaliacao}</span>      
                            <Star src={star} alt="estrela" />
                        </Nota>
                    </InfoMain>
                    <p>{getDescricao(restaurante.descricao)}</p>
                    <Button to={`/perfil/${restaurante.id}`}> Saiba mais </Button>
                </CardText>
        </Card>
    )
}

export default Restaurante