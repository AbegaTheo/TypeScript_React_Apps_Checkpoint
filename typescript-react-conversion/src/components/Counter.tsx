import React, { Component } from 'react'; // Importation de React et de Component pour créer un composant de classe

// Définition du type de l'état
interface CounterState {
  count: number; // L'état "count" est de type number
}

// Composant de classe typé
class Counter extends Component<{}, CounterState> {
  // Initialisation de l'état avec le type défini
  state: CounterState = {
    count: 0, // Le compteur commence à 0
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    console.log('Increment button clicked'); // Vérifiez si cette ligne s'affiche dans la console
    this.setState(
      (prevState) => {
        console.log('Previous state:', prevState.count); // Affiche l'état précédent
        return { count: prevState.count + 1 }; // Retourne le nouvel état avec le compteur incrémenté
      },
      () => {
        console.log('Updated state:', this.state.count); // Affiche l'état mis à jour après la modification
      }
    );
  };

  render() {
    return (
      <div className="counter">
        <h2>Compteur</h2> {/* Titre du composant Counter */}
        {/* Affichage de la valeur actuelle du compteur */}
        <p>Compte: {this.state.count}</p>
        {/* Bouton pour incrémenter le compteur */}
        <button type="button" className="btnIncrement" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter; // Exportation du composant Counter pour l'utiliser dans d'autres fichiers