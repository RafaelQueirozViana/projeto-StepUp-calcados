import Header from "./components/Header"
import Footer from "./components/Footer"
import Router from "./Router"
import "./global.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
