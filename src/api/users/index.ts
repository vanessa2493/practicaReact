import { data } from "../../types";

const postUser = async (data: data) => {
    await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios.json', {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getUsers = async () => {
const get = await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios.json');
const data = await get.json();
return data
}

const getUser = async (user: string) => {
    const get = await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${user}.json`);
    const data = await get.json();
    return data
}

const deleteUser = async (user: string)=> {
await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${user}.json`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patchUser = async (user: string, data: data)=> {
await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${user}.json`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}

export { postUser, getUsers, getUser, deleteUser, patchUser }
