import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Importando os componentes Home e Mercado
import { Mercado } from "./page/Mercado_livre/Mercado_Livre";
import { Home } from "./page/Home/home";

// Estilos dentro do próprio arquivo
const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f4f4f4",
  },
  nav: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
    padding: "10px 0",
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navListItem: {
    margin: "0 20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  navLinkHover: {
    backgroundColor: "#f0f0f0",
  },
};

function App() {
  return (
    <div style={styles.body}>
      <Router>
        <nav style={styles.nav}>
          {/* Link de navegação entre as páginas */}
          <ul style={styles.navList}>
            <li style={styles.navListItem}>
              <Link to="/" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li style={styles.navListItem}>
              <Link to="/mercado" style={styles.navLink}>
                Cadastrar
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Definindo as rotas */}
          <Route path="/" element={<Home />} />
          <Route path="/mercado" element={<Mercado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
