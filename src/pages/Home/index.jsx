import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Box from "../../components/Box/index"
import getImage from "../../utils/getImage"
import "./home.css"

export default function index() {
  const [produtos, setProdutos] = useState([])
  const [categoria, setCategoria] = useState("Todos")

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.log(error))
  }, [])

  const categorias = ["Todos", ...new Set(produtos.map((p) => p.categoria))]

  const produtosFiltrados =
    categoria === "Todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoria)

  const adicionarCarrinho = (nome) => {
    toast.success(`${nome} adicionado ao carrinho!`)
  }

  return (
    <main className="container">
      <h1 className="titulo-home">Nossos produtos</h1>

      <div className="filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={cat === categoria ? "filtro ativo" : "filtro"}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="d-flex">
        {produtosFiltrados.map((produto) => (
          <Box
            key={produto.id}
            nome={produto.nome}
            categoria={produto.categoria}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={getImage(produto.imagem)}
            onComprar={() => adicionarCarrinho(produto.nome)}
          />
        ))}
      </section>

      <ToastContainer />
    </main>
  )
}
