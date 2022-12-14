import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomSearchBtn:{
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    bottomSearchBtnTxt: {
        fontSize: 20, 
        color: 'white'
    },
})

export default styles;