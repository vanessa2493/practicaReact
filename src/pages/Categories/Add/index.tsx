import { Nav, Card } from '../../../components'
import { Form } from '../Form'

const Add = () => {
    return(
        <div className="page add-category">
            <Nav/>
            <Card id='categories-card' title='Categorías'>
                {/* form and span for each category with buttons edit and delete */}

                <Form/>
            </Card>
            

        </div>
    )
}

export { Add as AddCategory }