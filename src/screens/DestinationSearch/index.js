import { View, Text,TextInput, FlatList, Pressable } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import ENIcon from 'react-native-vector-icons/Entypo'

const DestinationSearchScreen = ({navigation}) => {
  const [inputText, setinputText] = useState("")
  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
      style={styles.textInput}
      placeholder="Where are you going?"
      value={inputText}
      onChangeText={setinputText}
      />

      {/* List of destination */}
      <FlatList
      data={searchResults}
      renderItem={({item}) => (
      <Pressable onPress={()=> navigation.navigate('Guests')} style={styles.row}>
        <View style={styles.iconContainer}>
          <ENIcon name={"location-pin"} size={35} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
      </Pressable>
      )}
      />

    </View>
  )
}

export default DestinationSearchScreen