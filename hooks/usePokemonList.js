import React, { useState, useEffect } from 'react'

function usePokemonList() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'
    const req = new Request(url)
    fetch(req)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPokemons(data.results)
      })
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return { pokemons }
}

export default usePokemonList
