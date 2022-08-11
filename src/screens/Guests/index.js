import { Text, View, Pressable } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'


const GuestScreen = ({navigation}) => {
    const [adults, setadults] = useState(0) 
    const [children, setchildren] = useState(0) 
    const [infants, setinfants] = useState(0) 
  return (
    <View style={{justifyContent:'space-between', height: '100%'}}>
        <View>
        {/* Row 1: Adults */}
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                </View>
                {/* Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Pressable 
                    onPress={()=> {
                            setadults(Math.max(0,adults -1))
                    }}
                    style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
                    
                    <Pressable 
                    onPress={()=> setadults(adults+1)}
                    style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                    {/* value */}
                    {/* + */}
                </View>
            </View>

            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
                </View>
                {/* Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Pressable 
                    onPress={()=> {
                            setchildren(Math.max(0,children -1))
                    }}
                    style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
                    
                    <Pressable 
                    onPress={()=> setchildren(children+1)}
                    style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                    {/* value */}
                    {/* + */}
                </View>
            </View>
            
            <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Infants</Text>
                    <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                </View>
                {/* Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Pressable 
                    onPress={()=> {
                            setinfants(Math.max(0,infants -1))
                    }}
                    style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
                    
                    <Pressable 
                    onPress={()=> setinfants(infants+1)}
                    style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                    {/* value */}
                    {/* + */}
                </View>
            </View>
        </View>

      
            <Pressable style={styles.bottomSearchBtn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.bottomSearchBtnTxt}>Search</Text>            
            </Pressable>
      
    </View>
  )
}

export default GuestScreen;

