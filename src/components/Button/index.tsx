import { ButtonLink, ButtonStyled } from "./styles"

type Props = {
    to?: string
    children: string
    onClick?: () => void
    type?:'button'
    title: string
}

const Button = ({ to, children, onClick, type, title } : Props) => {
    if (to) {
        return <ButtonLink title={title} to={to}>{children}</ButtonLink>    
    }

    return (
        <ButtonStyled title={title} onClick={onClick} type={type}>
            {children}
        </ButtonStyled>
    )
}

export default Button