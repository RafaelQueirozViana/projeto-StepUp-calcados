import { useEffect, useState } from "react"
import "./clientes.css"

export default function index() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/clientes")
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.log(error))
  }, [])

  const deletarCliente = (id) => {
    fetch(`http://localhost:3000/clientes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setClientes(clientes.filter((cliente) => cliente.id !== id))
      })
      .catch((error) => console.log(error))
  }

  return (
    <section className="container-clientes">
      <h1>Lista de clientes</h1>
      {clientes.map((cliente) => (
        <article className="content-clientes" key={cliente.id}>
          <strong>Nome: {cliente.nome}</strong>
          <br />
          <strong>Telefone: {cliente.telefone}</strong>
          <br />
          <strong>Email: {cliente.email}</strong>
          <button
            className="deletar"
            onClick={() => deletarCliente(cliente.id)}
          >
            Deletar
          </button>
        </article>
      ))}
    </section>
  )
}
