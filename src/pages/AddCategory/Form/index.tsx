import { log } from 'console'
import { FC, FormEvent } from 'react'
import { postCategory } from '../../../api'
import { Button } from '../../../components'
import { string_to_slug } from '../../../helpers'


const Form:FC = () =>{
    const handleSubmit = (e:FormEvent) => {
       
        e.preventDefault()
        const data= {
            name:(e.target as HTMLInputElement).value,
            slug:string_to_slug((e.target as HTMLInputElement).value)
            // agregar estado al value del input
        }
        console.log((e.target as HTMLInputElement).value)
        // postCategory(data)
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" />
            <Button className='btn btn-primary' text='Agregar' />
        </form>
    )
}

export { Form }
