import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView, FlatList } from "react-native";
import HomeButton from "../components/ui/HomeButton";
import { useState } from "react";
import GuardarButton from "../components/GuardarButton";

export default function Home({ navigation }) {

  const [objetos, setObjetos] = useState([]);

  const [nombreDelObjeto, setNombreObjeto] = useState("");

  const [cantidadDelObjeto, setCantidadObjeto] = useState("");

  const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }

  const [people, setpeople] = useState([
    { name: 'Papel igienico:', key: '1' },
    { name: '10', key: '2' },
    { name: 'Pizzas:', key: '3' },
    { name: '4', key: '4' },
    { name: 'Pollo:', key: '5' },
    { name: '1', key: '6' },
    { name: 'Quesos:', key: '7' },
    { name: '8', key: '8' },
    { name: 'Jabones:', key: '9' },
    { name: '2', key: '10' },
    { name: 'Rollo de servilletas:', key: '11' },
    { name: '5', key: '12' },
    { name: 'Pote de helado:', key: '13' },
    { name: '1', key: '14' },
    { name: 'Carne roja:', key: '15' },
    { name: '2', key: '16' },
    { name: 'Detergentes:', key: '17' },
    { name: '3', key: '18' },
    { name: 'Chocolates:', key: '19' },
    { name: '6', key: '20' },
  ]);

  const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  return <View style={styles.parent}>
    <ScrollView contentContainerStyle={{ width: 1000 }}>
      <View style={styles.header,{alignItems:"center"}}>
        <Image style={{ width: 500, height: 400, resizeMode: 'contain' }}
          source={require("../assets/Inventory_List_logo.png")} />
      </View>
      <View style={styles.body}>


        <Text>Nombre del objeto</Text>
        <TextInput onChange={(value) => { setNombreObjeto(value) }} placeholder={""} style={{ backgroundColor: "grey", Color: "white", height: "5%" }} />
        <Text>Cantidad del objeto</Text>
        <TextInput onChange={(value) => { setCantidadObjeto(value) }} placeholder={""} style={{ backgroundColor: "grey", Color: "white", height: "5%", marginBottom: 30 }} />


        <Button title="Agregar Objeto"

          onPress={() => setObjetos([...objetos, { nombre: nombreDelObjeto, cantidad: cantidadDelObjeto }])} />


        <View style={styles.form}>



        </View>

        <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />
        

      </View>
      
      <GuardarButton navigation={navigation} />

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
  },
  item: {
    marginTop: 24,
    padding: 15,
    backgroundColor: 'grey',
    fontSize: 15,
    marginTop: 24,
  }

});