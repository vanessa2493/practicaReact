const Nav = () => {
    return(
        <nav className="primary-nav">
            <ul className="nav-list">
                <li className="list-item">
                    <a className="nav-link" href="#">Categorías</a>
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