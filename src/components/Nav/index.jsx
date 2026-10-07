import { Link } from "react-router-dom"
import "./nav.css"

export default function index() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to={"/"}>Produtos</Link>
        </li>
        <li>
          <Link to={"/sobre"}>Sobre</Link>
        </li>
        <li>
          <Link to={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link to={"/clientes"}>Clientes</Link>
        </li>
        <li>
          <Link to={"/cadastro"}>Cadastro</Link>
        </li>
      </ul>
    </nav>
  )
}
