import React from 'react'; // Importation de React pour utiliser JSX
import ReactDOM from 'react-dom/client'; // Importation de ReactDOM pour manipuler le DOM
import './index.css'; // Importation des styles globaux pour l'application
import App from './App'; // Importation du composant principal de l'application

// Création de la racine React en ciblant l'élément HTML avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Rendu de l'application dans la racine
root.render(
  <React.StrictMode> {/* Mode strict pour détecter les problèmes potentiels dans l'application */}
    <App /> {/* Rendu du composant principal App */}
  </React.StrictMode>
);