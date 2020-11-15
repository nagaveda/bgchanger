import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

const App = () => {
  
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const handlePress = () =>{
      setRandomColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
  }
  
  const reset = () =>{
    setRandomColor("black")
  }

  return(
    <>
    <StatusBar backgroundColor={randomColor}/>
    <View style={{backgroundColor:randomColor}}>
      <Text style={{color:"red", textAlign:"center", marginTop:"10%", fontSize:32}}>
        BG Changer
      </Text>
    </View>
      <View style={[styles.container,{ backgroundColor:randomColor}]}>
        <TouchableOpacity onPress = {handlePress}>
          <View style={styles.button}>
            <Text style={styles.text}>Tap Me </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <View style={[styles.button, {marginTop:10}]}>
            <Text style={styles.text}>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
  
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  button:{
    backgroundColor: "green",
    borderRadius:15,    
  },
  text:{
    textTransform:'uppercase',
    fontSize:32,
    paddingHorizontal:40,
    paddingVertical:10
  }

})
