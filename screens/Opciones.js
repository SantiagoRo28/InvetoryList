import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView, FlatList, useColorScheme, TouchableOpacity} from "react-native";
import HomeButton from "../components/ui/HomeButton";
import { useState } from "react";
import NocheButton from "../components/NocheButton";

export default function Home({ navigation }) {
  
  const [objetos, setObjetos] = useState([]);

  const [nombreDelObjeto, setNombreObjeto] = useState("");

  const [cantidadDelObjeto, setCantidadObjeto] = useState("");

  return <View style={styles.parent}>
    
    

    <View style={styles.footer}>
<NocheButton/>


    <HomeButton navigation={navigation}/>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection:'row',
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
    width: "50%",
    height: "50%",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: 'White'
  }

});