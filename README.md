# Installation :

```
git clone https://github.com/rsnda/derniercri.git
cd derniercri
yarn
yarn start
```

# Présentation

Il s'agit d'un projet Expo, avec React Navigation.

Sur la première page vous trouverez une liste de pokemon. Un clique sur le nom permet d'accédez a la page détails.

J'utilise l'api PokeApi et utilise les endpoints suivant :

`https://pokeapi.co/api/v2/pokemon?limit=100`

Pour récuperer les 100 premiers pokemon

puis `https://pokeapi.co/api/v2/pokemon/N` (N étant un nombre) pour le détail de chaque pokémon

Les appels sont visibles dans les hooks custom `usePokemonList` et `usePokemon`
