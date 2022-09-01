import { FC, FormEvent, useState } from 'react'
import { categoriesApi } from '../../../api/categories'
import { Button } from '../../../components'
import { string_to_slug } from '../../../helpers'


const Form:FC = () =>{
    const [data, setData] = useState<string>('')

    const handleSubmit = (e:FormEvent) => {
       
        e.preventDefault()
        
        const slug = string_to_slug(data)
        categoriesApi.post({name:data, slug})
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={data} 
                onChange={e => setData(e.target.value)} 
            />
            <Button className='btn btn-primary' text='Agregar' />
        </form>
    )
}

export { Form as AddCategoryForm }
