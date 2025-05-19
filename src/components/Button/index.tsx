import { ButtonLink } from "./styles"

type Props = {
    to:string
    children: string
}

const Button = ({ to, children } : Props) => (
    <ButtonLink size="big" to={to as string}>{children}</ButtonLink>    
)

export default Button