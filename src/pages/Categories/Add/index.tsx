import { Nav, Card } from '../../../components'
import { AddCategoryForm } from '../Form' 
import { CategoriesTable } from '../Table'

const Add = () => {
    return(
        <div className="page add-category">
            <Nav/>
            <Card id='categories-card' title='Categorías'>
                {/* form and span for each category with buttons edit and delete */}

                <AddCategoryForm/>
                <CategoriesTable/>
            </Card>
            

        </div>
    )
}

export { Add as AddCategory}