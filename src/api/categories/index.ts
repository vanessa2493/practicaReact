import { data } from "../users";



const postCategory = async (data: data) => {
    await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/categorias.json', {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getCategories = async () => {
const get = await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/categorias.json');
const data = await get.json();
return data
}

const getCategory = async (category: string) => {
    const get = await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${category}.json`);
    const data = await get.json();
    return data
}

const deleteCategory = async (category: string)=> {
await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/categorias/${category}.json`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patchCategory = async (category: string, data: data)=> {
await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/categorias/${category}.json`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}

export { postCategory, getCategories, getCategory, deleteCategory, patchCategory }