import { Data } from "../../types";


const post = async (data: Data) => {
    await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/categorias.json', {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getAll = async () => {
const get = await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/categorias.json');
const data = await get.json();
return data
}

const get = async (category: string) => {
    const get = await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${category}.json`);
    const data= await get.json();
    return data
}

const del = async (category: string)=> {
await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/categorias/${category}.json`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patch = async (category: string, data: Data)=> {
await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/categorias/${category}.json`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}

export const categoriesApi = { post, getAll, get, del, patch }