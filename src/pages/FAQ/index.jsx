import { useEffect, useState } from "react"
import "./faq.css"

export default function index() {
  const [faq, setFaq] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/faq")
      .then((response) => response.json())
      .then((data) => setFaq(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="container-faq">
      <h1>Perguntas frequentes</h1>
      {faq.map((item) => (
        <article className="content-faq" key={item.id}>
          <h2>{item.pergunta}</h2>
          <p>{item.resposta}</p>
        </article>
      ))}
    </section>
  )
}
