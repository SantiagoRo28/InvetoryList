import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, SafeAreaView, TouchableOpacity} from "react-native";
import OpcionesButton from "../components/ui/OpcionesButton";
import ListasButton from "../components/ui/ListasButton";
import HomeButton from "../components/ui/HomeButton";
import NuevoObjetoButton from "../components/NuevoObjetoButton";
import { useState } from "react";

export default function Home({ navigation }) {
  let arrayInput = []
  const [user, setUser] = useState ()
  function AgregarTextInput(){
    arrayInput.push(<TextInput value={user} onChangeText={setUser} placeholder={"Username"} style={styles.inputStyle} placeholderTextColor={"#EBE8E7"} />)
  }
  function AgregarTextInput(){
    return (
      aOp.map(() => (
        <TextInput value={user} onChangeText={setUser} placeholder={"Username"} style={styles.inputStyle} placeholderTextColor={"#EBE8E7"} />
      ))
    )
  }
  return <View style={styles.parent}>
          <View style={styles.header}>
        <Image style={{  width:500,height:400,resizeMode: 'contain' }}
          source={require("../assets/Inventory_List_logo.png")} />
    </View>
    <View style={styles.body}>
      <HomeButton navigation={navigation} />


      <label>Nombre del Objeto</label> <label>Cantidad del Objeto</label>
      <NuevoObjetoButton propData = {AgregarTextInput}/>
      <View style={styles.form}>
      {arrayInput}
      </View>


    </View>
    <View style={styles.footer}>

    </View>
  </View>;
}

const styles = StyleSheet.create({
  parent: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    flexDirection:'column',
    backgroundColor:'White'
  },
  body:{
    flex: 5,
    width: '100%',
    height:"100%",
    paddingHorizontal:20
  },
  footer :{
    flex:1,
    width:"100%",
    height:"100%"
  },
  form:{
     width:'100%',
     height:'100%',
     flex:4,
     flexDirection:"column",
     alignItems:"center",
     justifyContent:"center"
  },
  inputStyle:{
    backgroundColor:'rgba(54, 50, 54, 0.6)',
    width:"100%",
    height:45,
    color:'white',
    borderRadius:5,
    marginVertical:10
  }
  
});