import { ImageBackground, StyleSheet, Text, View, Pressable, Animated } from 'react-native'
import React from 'react'
import styles from './styles' 
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = () => {
  return (
    <Animated.View style={styles.container}>
        {/* Search Bar */}
        <Pressable 
                style={styles.searchButton}
                onPress={()=> console.warn('Expolore Btn clicked')}            
            >
              <Fontisto name="search" size={25} color={'#f15454'} />
                <Text styles={[styles.buttonText]}>Where are you going?</Text>
            </Pressable>

        <ImageBackground
        source={require('../../../assets/images/travel.jpeg')}
        style={styles.image}
     
        >
            {/* Title */}
            <Text style={styles.title}>Go Near</Text>

            {/* Button */}
            <Pressable 
                style={styles.button}
                onPress={()=> console.warn('Expolore Btn clicked')}            
            >
                <Text styles={[styles.buttonText]}>Explore nearby stays</Text>
            </Pressable>
        </ImageBackground>
    </Animated.View>
  )
}

export default HomeScreen
