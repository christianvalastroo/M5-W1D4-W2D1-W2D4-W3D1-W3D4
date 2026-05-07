import MyNav from "./components/MyNav.jsx/MyNav"
import Welcome from "./components/Welcome/Welcome"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks"
import MyFooter from "./components/MyFooter.jsx/MyFooter"
import "./App.css"
import { useState } from "react"

const App = () => {
  // Stato usato dalla navbar per filtrare i libri.
  const [search, setSearch] = useState("")

  return (
    <div className="app-wrapper">
      {/* Navbar principale del sito. */}

      <MyNav
        search={search}
        setSearch={setSearch}
      />

      <main className="main-content">
        <Welcome />

        {/* Lista dei libri filtrata dal testo scritto nella navbar. */}
        <AllTheBooks
          search={search}
        />
      </main>

      <MyFooter />
    </div>
  )
}

export default App
