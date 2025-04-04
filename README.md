# TypeScript_React_Conversion_Checkpoint

## Description du Projet

Ce projet a pour objectif de convertir un projet React initialement en JavaScript en TypeScript. L'application comprend deux composants :

- **Greeting** : Un composant fonctionnel qui affiche un message de bienvenue.

- **Counter** : Un composant de classe qui gère un compteur avec incrémentation.

---

## Installation et Configuration

### 1. Cloner le projet

Si vous souhaitez travailler sur ce projet, commencez par cloner le dépôt :

```bash
git clone <URL_DU_DEPOT>
cd typescript_checkpoint/typescript-app
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet en mode développement

```bash
npm start
```

Le projet s'exécutera à l'adresse `http://localhost:3000/`.

---

## Conversion de JavaScript à TypeScript : Étapes suivies

### 1. Installation de TypeScript et des types requis

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

### 2. Renommage des fichiers

- `src/App.js` → `src/App.tsx`
- `src/index.js` → `src/index.tsx`

### 3. Génération du fichier `tsconfig.json`

Si le fichier n'existe pas, il peut être généré avec :

```bash
npx tsc --init
```

### 4. Mise à jour du fichier `tsconfig.json`

Nous avons inclus ces options essentielles :

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "lib": ["dom", "ES2016"],
    "jsx": "react",
    "strict": true
  },
  "include": ["src"]
}
```

---

## Code d'origine (JavaScript)

### `Greeting.js`

```javascript
import React from 'react';
const Greeting = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};
export default Greeting;
```

### `Counter.js`

```javascript
import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;
```

---

## Code Converti en TypeScript

### `Greeting.tsx`

```tsx
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;
```

### `Counter.tsx`

```tsx
import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### `App.tsx`

```tsx
import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="John Doe" />
      <Counter />
    </div>
  );
};

export default App;
```

---

## Utilisation et Collaboration

### 1. Forker et cloner le projet

Si vous souhaitez contribuer :

```bash
git clone <URL_DU_DEPOT>
cd typescript_checkpoint/typescript-app
```

### 2. Créer une branche pour vos modifications

```bash
git checkout -b feature-nouvelle-fonctionnalite
```

### 3. Ajouter vos modifications et les pousser

```bash
git add .
git commit -m "Ajout d'une nouvelle fonctionnalité"
git push origin feature-nouvelle-fonctionnalite
```

### 4. Créer une Pull Request sur GitHub

Rendez-vous sur le dépôt GitHub et créez une **Pull Request** en demandant une revue de code.

---

## 📌 Conclusion

Ce projet a permis de découvrir comment convertir un projet React en TypeScript et d’apprendre les bonnes pratiques de typage avec `interface`, `React.FC`, et `Component<{}, State>`.
