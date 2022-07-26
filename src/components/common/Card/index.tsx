import { FC, ReactNode } from "react"

type Props={
    title?:string,
    children:ReactNode,
    id:string
}

const Card: FC<Props> = ({title, children, id}) => {
    return(
        <div id={id} className="card">
            {title && (
                <h2>
                    {title}
                </h2>)
            }
            
            {children}
        </div>
    )
}

export {Card}