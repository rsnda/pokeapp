# Installation :

```
git clone https://github.com/rsnda/pokeapp.git
cd pokeapp
yarn
yarn start
```

# Présentation

Il s'agit d'un projet Expo, avec React Navigation.

Sur la première page vous trouverez une liste de pokemon. 
Un clic sur le nom permet d'accédez a la page détails.

J'utilise l'api PokeApi:

`https://pokeapi.co/api/v2/pokemon?limit=100`

Pour récuperer les 100 premiers pokemon

puis `https://pokeapi.co/api/v2/pokemon/N` (N étant un nombre) pour le détail de chaque pokémon

Les appels sont visibles dans les hooks custom `usePokemonList` et `usePokemon`
