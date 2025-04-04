import React from 'react'; // Importation de React pour utiliser JSX

// Définition des types des props
interface GreetingProps {
  name: string; // La prop "name" est de type string
}

// Composant fonctionnel typé avec React.FC
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Le composant reçoit une prop "name" et l'affiche dans un message de bienvenue
  return <div className="greeting">Bonjour, {name} !</div>; // Retourne un élément JSX avec le message de bienvenue
};

export default Greeting; // Exportation du composant Greeting pour l'utiliser dans d'autres fichiers