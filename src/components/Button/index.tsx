import { ButtonLink, ButtonStyled } from "./styles"

type Props = {
    to?: string
    children: string
    onClick?: () => void
    type?:'button'
}

const Button = ({ to, children, onClick, type } : Props) => {
    if (to) {
        return <ButtonLink to={to}>{children}</ButtonLink>    
    }

    return (
        <ButtonStyled onClick={onClick} type={type}>
            {children}
        </ButtonStyled>
    )
}

export default Button