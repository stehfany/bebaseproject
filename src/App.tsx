import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Base from './Base';
import logo from './bebase.jpeg'; // Certifique-se de que o caminho está correto
import './App.css'; // Importando estilos

function App() {
  const location = useLocation(); // Hook para obter a rota atual

  return (
    <div className="App">
      {/* Navbar com links */}
      <nav className="navbar">
        <Link to="/" className="App-link">Bebase</Link>
        <span className="separator">|</span>
        <Link to="/base" className="App-link">Quem somos</Link>
      </nav>

      {/* Renderiza o header e o conteúdo apenas na rota '/' */}
      {location.pathname === '/' && (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bem-vindo a!</p>
          <h1 className="titulo">Bebase</h1>
        </header>
      )}

      {/* Rotas definidas */}
      <Routes>
        <Route path="/base" element={<Base />} />
      </Routes>
    </div>
  );
}

export default App;