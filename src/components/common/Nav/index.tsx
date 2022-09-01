import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <nav className="primary-nav">
            <ul className="nav-list">
                <li className="list-item">
                    <Link to={'/categories'}> Agregar Categoría</Link>
                </li>
                <li>
                    <a className="nav-link" href="#">Usuarios</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Agregar Tarea</a>
                </li>
            </ul>
        </nav>
    )
}

export { Nav }