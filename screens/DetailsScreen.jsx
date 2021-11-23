import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { usePokemon } from '../hooks'

function DetailsScreen({ route }) {
  const { url } = route.params
  const { pokemon } = usePokemon(url)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {pokemon === undefined ? (
        <Text>Error while reaching for pokemon data</Text>
      ) : (
        <>
          <Image
            style={styles.tinyLogo}
            source={{ uri: pokemon.sprites.front_default }}
          />
          <Text style={styles.title}>{pokemon.name}</Text>
          <Text>List of abilities : </Text>
          {pokemon?.abilities.map((ability) => {
            return <Text>{ability.ability.name}</Text>
          })}
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default DetailsScreen
