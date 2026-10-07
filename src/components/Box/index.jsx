import "./box.css"

export default function index(props) {
  const precoFormatado = Number(props.preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <section className="container-box">
      <img className="image" src={props.imagem} alt={props.nome} />
      <span className="categoria">{props.categoria}</span>
      <h2 className="title-box">{props.nome}</h2>
      <p className="description">{props.descricao}</p>
      <strong className="preco">{precoFormatado}</strong>
      <button className="btn-comprar" onClick={props.onComprar}>
        Adicionar ao carrinho
      </button>
    </section>
  )
}
