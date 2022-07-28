import { FC } from "react"

type Props = {
    text: string,
    className?: string,
    onClick?: () => void
}

const Button:FC<Props> = ({text, className, onClick}) =>{

    return(
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export { Button }