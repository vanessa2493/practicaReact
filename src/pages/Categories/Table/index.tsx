import { getCategories } from "../../../api"
import { data } from "../../../types"

const Table = () => {
    
    {
        const lista = async () => {
                const data: data[] = await getCategories()
                data.map(({name, slug, idDB}) =>{
                    return(
                        <div>
                            <span>{name}</span>
                            <a href="#">Eliminar</a>
                            <a href={`./edit-category:${slug}`}>Editar</a>
                        </div>
                    )
                }
            )
        }
        
    }
}

export { Table }