# Installation

## Cloner le Repository

Clonez ce repository sur votre machine locale en utilisant la commande suivante :

```bash
git clone https://github.com/nom-utilisateur/nom-repository.git
```
Pour instaqller les dépendances : 

```bash
npm install
```

Pour lancer l'application 

```bash
npm run dev
```

# Technologies Principales

- **React 18**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **React Query (TanStack Query)**
- **Zustand (Gestion d'état)**
- **React Router DOM**

## Architecture

Le projet suit une architecture atomique (**Atomic Design**) avec la structure suivante :

### Atomes
Composants de base : 
- `Button`
- `Card`
- `Text`
  
### Molécules
Composants composés d'atomes : 
- `CardRecette`
- `NavMenu`
  
### Organisme
Composants plus complexes : 
- `RecetteList`
- `RecetteMainInfo`
  
### Template
Layouts réutilisables

### Page
Composants de pages
