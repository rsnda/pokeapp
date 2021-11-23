import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { usePokemonList } from '../hooks'

const Pokemon = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress()}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  )
}

function HomeScreen({ navigation }) {
  const { pokemons } = usePokemonList()

  const onPokemonPress = (url) => {
    navigation.navigate('Details', { url })
  }
  const renderItem = ({ item }) => {
    return <Pokemon name={item.name} onPress={() => onPokemonPress(item.url)} />
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Les 100 premiers Pokemon !</Text>

      {!!pokemons && (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={pokemons}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </SafeAreaView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textTransform: 'capitalize',
  },
})

export default HomeScreen
