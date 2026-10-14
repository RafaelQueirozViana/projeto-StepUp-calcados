import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./cadastro.css"

export default function index() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.nome === "" || formData.telefone === "" || formData.email === "") {
      toast.error("Todos os campos são obrigatórios!")
      return false
    }

    fetch("http://localhost:3000/clientes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Cliente cadastrado com sucesso!")

        setFormData({
          nome: "",
          telefone: "",
          email: "",
        })
      })
      .catch(() => toast.error("Erro ao cadastrar. Verifique se o servidor está rodando."))
  }

  return (
    <main className="container container-cadastro">
      <h1>Cadastro de clientes</h1>
      <form onSubmit={handleSubmit}>
        <article className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </article>

        <button className="btn-cadastrar" type="submit">Cadastrar</button>

        <ToastContainer />
      </form>
    </main>
  )
}
