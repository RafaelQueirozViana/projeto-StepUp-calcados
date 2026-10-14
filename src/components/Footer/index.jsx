import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import whatsapp from "../../assets/images/whatsapp.png"
import "./footer.css"

export default function index() {
  return (
    <footer>
      <div className="contentFooter">
        <div className="footer-link">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={whatsapp} alt="WhatsApp" />
        </div>
        <div className="links">
          <p>Produtos</p>
          <p>Trocas e devoluções</p>
          <p>Sobre</p>
          <p>Contato</p>
          <p>Política de privacidade</p>
        </div>
        <h2>StepUp © 2026</h2>
      </div>
    </footer>
  )
}
