import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >

          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Inicio
                <span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/dulceria"} className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Proyectos
                <span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/listpedidos"} className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Pedidos
                <span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          &nbsp; &nbsp; &nbsp;
        <li className="nav-header">
          <h5>Precios</h5>
        </li>
        <li className="nav-item">
          <Link to={"/baratos"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Baratos
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/intermedio"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Preco intermedio
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/caros"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Caros
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        &nbsp;

        </ul>
      </nav>
    );
}
export default Menu;