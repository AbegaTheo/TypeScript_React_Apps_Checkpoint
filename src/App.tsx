import './App.css'; // Importation des styles CSS pour l'application
import React from 'react'; // Importation de React pour utiliser JSX
import Greeting from './components/Greeting'; // Importation du composant Greeting
import Counter from './components/Counter'; // Importation du composant Counter

// Définition du composant principal de l'application
const App: React.FC = () => {
  return (
    <div className="App"> {/* Conteneur principal avec une classe CSS */}
      <h1>Bonjour, ceci est un exemple d'application React convertie en TypeScript !</h1> {/* Titre principal */}
      <Greeting name="John Doe" /> {/* Utilisation du composant Greeting avec une prop "name" */}
      <Counter /> {/* Utilisation du composant Counter */}
    </div>
  );
};

export default App; // Exportation du composant App pour l'utiliser dans d'autres fichiers