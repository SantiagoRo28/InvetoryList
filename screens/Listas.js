import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView, FlatList} from "react-native";
import HomeButton from "../components/ui/HomeButton";
import { useState } from "react";

export default function Home({ navigation }) {
  
  const [objetos, setObjetos] = useState([]);

  const [nombreDelObjeto, setNombreObjeto] = useState("");

  const [cantidadDelObjeto, setCantidadObjeto] = useState("");

  return <View style={styles.parent}>
    <ScrollView contentContainerStyle={{width:800}}>
    <View style={styles.header}>
      <Image style={{ width: 500, height: 400, resizeMode: 'contain' }}
        source={require("../assets/Inventory_List_logo.png")} />
    </View>
    <View style={styles.body}>


      <Text>Nombre del objeto</Text>
      <TextInput onChange={(value)=> {setNombreObjeto(value)}} placeholder={""} style={{ backgroundColor: "grey", Color: "white", height: "150%" }} /> 
      <Text>Cantidad del objeto</Text>
      <TextInput onChange={(value)=> {setCantidadObjeto(value)}} placeholder={""} style={{ backgroundColor: "grey", Color: "white", height: "150%", marginBottom: 20}} />


      <Button title="Agregar Objeto"

      onPress = {()=> setObjetos([...objetos, {nombre:nombreDelObjeto, cantidad:cantidadDelObjeto}])}/>
      
      
      <View style={styles.form}>
      


      </View>


    </View>


    <HomeButton navigation={navigation} />

    <View style={styles.footer}>

    </View></ScrollView>
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