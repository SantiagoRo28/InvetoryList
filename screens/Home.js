import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, SafeAreaView,} from "react-native";
import OpcionesButton from "../components/ui/OpcionesButton";
import ListasButton from "../components/ui/ListasButton";
import CargarListasButton from "../components/ui/CargarListasButton";
import { useState } from "react";

export default function Home({ navigation }) {

  const [apiData,setApiData] = useState({title:""})
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");

  const testApi = async () =>{
       const data = await fetch('exp://192.168.1.42:19000');
       const result = await data.json();
       setApiData(result);
  }


  
  return <View style={styles.parent}>
          <View style={styles.header}>
        <Image style={{  width:1000,height:400,resizeMode: 'contain' }}
          source={require("../assets/Inventory_List_logo.png")} />
    </View>
    <View style={styles.body}>
      <View style={styles.form}>
          <Image style = {{height: 200, resizeMode : 'stretch', margin: 5 }} source={{uri :"https://d2x3xhvgiqkx42.cloudfront.net/de87160e-d02b-4df5-828c-177f7ffee623/2b98aa5e-9890-4c46-b0a8-621de2d3826b/2020/02/20/0778cf97-f360-4dc1-b7b3-415fcee382c1/0cf276de-7c68-4aef-a765-695057f344d8.png"}}/>
          <View style={styles.form}>
        <ListasButton navigation={navigation} />
        <CargarListasButton navigation={navigation} />
        <OpcionesButton navigation={navigation} />
      </View>

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
  },
});