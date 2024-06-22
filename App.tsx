import React, { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Company from './Components/Company';


function App() {
  // const name = "harash"
  const harash=()=>{
    console.warn("Function Called")
    
  }
  const [name, setname] = useState("")
  return (
    <View>
      {/* <Text style={{ fontSize: 40, marginTop: 90 }}>React  Native with TS</Text>
    <Button title='Press here'></Button>
    <Text>Harash poriya</Text>
    <Text>{name}</Text>
    <Button title='Press me'></Button>
    <Company/> */}

    {/* <Text style={{ fontSize: 30}}>Button and onPress Event</Text>

    <Button title='On Press' onPress={()=>harash()} color={"green"}/> */}

    {/* <Text style={{fontSize:30,color:"red", backgroundColor:"black", marginBottom:10}}>Style in React Native</Text>
    <Text style={styles.textBox}>Style in React Native</Text>
    <Text style={styles.textBox}>Style in React Native</Text>
    <Text style={styles.textBox}>Style in React Native</Text> */}
   
   <Text style={{fontSize:30}}>Handle Text Input</Text>
   <Text style={{fontSize:30}}>Your name is:{name}</Text>
   <TextInput
   style={styles.textInput}
    placeholder='Enter your name' 
    value={name}
    onChangeText={(text)=>setname(text)}/>
    <Button title='Clear input value' onPress={()=>setname("")} />
    </View>
  );
}

// const styles=StyleSheet.create({
//   textBox:{
//     color:"blue",
//     fontSize:30,
//     backgroundColor:"black",
//     marginBottom:20,  
//     padding:20,
//     borderRadius:20,
//     height:100,
//     textAlignVertical:"center",
//     textAlign:"center",
//     borderColor:"red",
//     borderWidth:5,
//   }
// })
const styles = StyleSheet.create({
  textInput:{
    fontSize:20,
    color:"red", 
    borderColor:"blue",
     borderWidth:2
  }
})


export default App;
