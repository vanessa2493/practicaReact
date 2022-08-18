import { useEffect, useState } from "react"
import { categoriesApi } from "../../../api/categories"
import { mapToArray } from "../../../helpers"
import { Data } from "../../../types"

const Table = () => {

    const [ categories, setCategories ] = useState<Data[]>([])
    
    useEffect(() =>{
        categoriesApi.getAll().then(data => setCategories(mapToArray(data)))
    })

        return(
            <table>
                <tbody>
                    
                {
            
                    categories.map(({name, slug, idDB}) => {
                        return(
                            <tr>
                                <td>
                                    <span>{name}</span>
                                </td>
                                <td>
                                    <a href="#">Eliminar</a>
                                </td>
                                <td>
                                    <a href={`./edit-category:${slug}`} id={idDB}>Editar</a>
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