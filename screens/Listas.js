import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, SafeAreaView, TouchableOpacity } from "react-native";
import OpcionesButton from "../components/ui/OpcionesButton";
import ListasButton from "../components/ui/ListasButton";
import HomeButton from "../components/ui/HomeButton";
import NuevoObjetoButton from "../components/NuevoObjetoButton";
import { useState } from "react";
import { color } from "react-native-reanimated";

export default function Home({ navigation }) {
  let arrayInput = []
  const [user, setUser] = useState()
  
  const [objetos, setObjetos] = useState([]);

  const [nombreDelObjeto, setNombreObjeto] = useState("");

  const [cantidadDelObjeto, setCantidadObjeto] = useState("");

  return <View style={styles.parent}>
    <View style={styles.header}>
      <Image style={{ width: 500, height: 400, resizeMode: 'contain' }}
        source={require("../assets/Inventory_List_logo.png")} />
    </View>
    <View style={styles.body}>


      Nombre del objeto
      <TextInput onChange={(value)=> {setNombreObjeto(value)}} placeholder={""} style={{ backgroundColor: "grey", Color: "white", height: "10%" }} /> 
      Cantidad del objeto
      <TextInput onChange={(value)=> {setCantidadObjeto(value)}} placeholder={""} style={{ backgroundColor: "grey", Color: "white", height: "10%" }} />


      <Button title="Agregar Objeto"

      onPress = {()=> setObjetos([...objetos, {nombre:nombreDelObjeto, cantidad:cantidadDelObjeto}])}/>
      
      {objetos.map(objeto=>(<Text>{objeto.nombre}</Text>))}

      <View style={styles.form}>
        {arrayInput}


      </View>


    </View>


    <HomeButton navigation={navigation} />

    <View style={styles.footer}>

    </View>
  </View>;
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: 'White'
  },
  body: {
    flex: 5,
    width: '100%',
    height: "100%",
    paddingHorizontal: 20
  },
  footer: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  form: {
    width: '100%',
    height: '100%',
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyle: {
    backgroundColor: 'rgba(54, 50, 54, 0.6)',
    width: "100%",
    height: 45,
    color: 'white',
    borderRadius: 5,
    marginVertical: 10
  }

});