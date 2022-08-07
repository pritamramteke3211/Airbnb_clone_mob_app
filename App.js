import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ENIcon from 'react-native-vector-icons/Entypo'
import HomeScreen from './src/screens/Home'
import Test from './src/screens/Test'
import Post from './src/components/Post'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'

const post1 = feed[0];

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      {/* <Test/> */}
      {/* <HomeScreen /> */}
      {/* <Post post={post1}/> */}
      <SearchResultsScreen/>
    </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})