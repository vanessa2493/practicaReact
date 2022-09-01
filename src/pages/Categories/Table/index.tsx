import { useEffect, useState } from "react"
import { categoriesApi } from "../../../api/categories"
import { Data } from "../../../types"

const Table = () => {

    const [ categories, setCategories ] = useState<Data[]>([])
    
    useEffect(() =>{
        categoriesApi.getAll().then(data => setCategories(data))
    })

        return(
            <table>
                <tbody>
                    
                {
            
                    categories.map(({name, idDB}) => {
                        return(
                            <tr>
                                <td>
                                    <span>{name}</span>
                                </td>
                                <td>
                                    <a href="#">Eliminar</a>
                                </td>
                                <td>
                                    <a href={`./edit-category:${idDB}`} id={idDB}>Editar</a>
                                </td>
                                
                            </tr>
                        )
                                    
                    })
                }
                    
                </tbody>
            </table>
            
            
        )

}

export { Table as CategoriesTable }