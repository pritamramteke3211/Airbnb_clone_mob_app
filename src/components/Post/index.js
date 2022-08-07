import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Post = ( {post: {id,image,type,title,bed,bedroom,oldPrice,newPrice,totalPrice} }) => {
  console.log(id,image,type,title,bed,bedroom,oldPrice,newPrice,totalPrice)
  return (
    <View style={styles.container} key={id}>
      {/* Image */}
      <Image 
      style={styles.image} 
      source={{ uri: image }} 
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>{bed} bed {bedroom} bedroom</Text>

      {/* Type & Description */}
      <Text>
        {type}. {title}
      </Text>

      {/* Old price & New price */}
      <Text style={styles.prices}> 
        <Text style={styles.oldPrice}>${oldPrice} </Text>
        <Text style={styles.price}>  ${newPrice} </Text>
        / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${totalPrice}  total</Text>
    </View>
  )
}

export default Post