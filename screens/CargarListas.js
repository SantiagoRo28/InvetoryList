import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, SafeAreaView,} from "react-native";
import HomeButton from "../components/ui/HomeButton";

export default function Home({ navigation }) {

    const [apiData,setApiData] = useState({title:""})
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
  
    const testApi = async () =>{
         const data = await fetch('exp://192.168.1.42:19000');
         const result = await data.json();
         setApiData(result);
    }

};
  


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