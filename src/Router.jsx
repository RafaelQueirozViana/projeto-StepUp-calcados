import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import FAQ from "./pages/FAQ"
import Clientes from "./pages/Clientes"
import Cadastro from "./pages/cadastro"
import NotFound from "./pages/NotFound"

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
