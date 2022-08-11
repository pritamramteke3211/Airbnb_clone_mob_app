import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ENIcon from 'react-native-vector-icons/Entypo'
import HomeScreen from './src/screens/Home'
import Test from './src/screens/Test'
import Post from './src/components/Post'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch'
import GuestScreen from './src/screens/Guests'
import Router from './src/navigation/Router'


const post1 = feed[0];

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
      <Router/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})