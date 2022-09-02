import { FC } from "react";
import { Link } from "react-router-dom";

const MainNav: FC = () => {
  return (
    <nav>
      <Link to={"/categories"}> Agregar Categorías </Link>
      <Link to={"/tasks"}> Agregar Tareas </Link>
      <Link to={"/users"}> Usuarios </Link>
    </nav>
  );
};

export { MainNav };
