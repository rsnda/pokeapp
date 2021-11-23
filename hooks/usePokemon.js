import React, { useState, useEffect } from 'react'

function usePokemon(url) {
  const [pokemon, setPokemon] = useState()

  const fetchPokemonDetails = () => {
    const req = new Request(url)
    fetch(req)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPokemon(data)
      })
  }

  useEffect(() => {
    fetchPokemonDetails()
  }, [])

  return { pokemon }
}

export default usePokemon
