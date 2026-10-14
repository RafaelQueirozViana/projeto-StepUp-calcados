import { Link } from "react-router-dom"
import "./notFound.css"

export default function index() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Página não encontrada</h1>
      <p className="notfound-text">
        Parece que esse par de tênis saiu de linha. A página que você procura não existe.
      </p>

      <Link to={"/"} className="notfound-link">
        Voltar para os produtos
      </Link>
    </div>
  )
}
