import { StyleSheet, Text, View,TextInput, Animated } from 'react-native'
import React from 'react'
import styles from './styles'


const Test = () => {
  return (
    <View style={styles.containerView}>
      {/* SearchBar */}
        <Animated.View style={{
        //   transform: [{ translateY: translateSearchContainer }], 
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
        //   backgroundColor: COLORS.sans,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 60,
          elevation: 4,
          zIndex: 100,
        }}>
        {/* <AvoidKeyboard> */}
          <TextInput
            // ref={textInputRef}
            placeholder="Paket Hidroponik Pemula"
            clearButtonMode="always"
            value={'vale'}
            onChangeText={(value) => console.log(value)}
            style={styles.input}
            // onFocus={() => onTextInputFocus()}
            // onBlur={() => onTextInputBlur()}
            clearTextOnFocus
          />
        {/* </AvoidKeyboard> */}
        {/* <IconButton icon="bell-outline" color={COLORS.white} onPress={() => onPressBell()} /> */}
      </Animated.View>
</View>
  )
}

export default Test

// const styles = StyleSheet.create({})