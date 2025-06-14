import { ButtonLink } from "./styles"

type Props = {
    to:string
    children: string
    size: 'small' | 'big'
}

const Button = ({ to, children, size } : Props) => (
    <ButtonLink size={size} to={to as string}>{children}</ButtonLink>    
)

export default Button