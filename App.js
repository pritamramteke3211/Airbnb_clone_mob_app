import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ENIcon from 'react-native-vector-icons/Entypo'
import HomeScreen from './src/screens/Home'
import Test from './src/screens/Test'


const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView>
      <HomeScreen />
      {/* <Test/> */}
    </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})