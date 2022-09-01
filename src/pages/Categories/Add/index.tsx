import { Card, Layout } from "../../../components";
import { AddCategoryForm } from "../Form";
import { CategoriesTable } from "../Table";

const Add = () => {
  return (
    <Layout page="categories">
      <Card id="categories-card" title="Categorías">
        {/* form and span for each category with buttons edit and delete */}

        <AddCategoryForm />
        <CategoriesTable />
      </Card>
    </Layout>
  );
};

export { Add as AddCategory };
