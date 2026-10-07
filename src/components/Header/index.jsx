import logo from "../../assets/images/logo.png"
import "./header.css"

export default function index() {
  return (
    <header className="header">
      <div className="title-container">
        <img className="img-logo" src={logo} alt="Logo StepUp" />
        <div className="title-centro">
          <h1 className="title">Step<span className="text-marcado">Up</span> Calçados</h1>
          <p className="subtitle">Tênis e sapatos para cada passo</p>
        </div>
      </div>
    </header>
  )
}
