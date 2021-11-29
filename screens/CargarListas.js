import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView, FlatList} from "react-native";
import HomeButton from "../components/ui/HomeButton";
import { useState } from "react";
import SubirArchivoButton from "../components/SubirArchivoButton";

export default function Home({ navigation }) {
  
  const [objetos, setObjetos] = useState([]);

  const [nombreDelObjeto, setNombreObjeto] = useState("");

  const [cantidadDelObjeto, setCantidadObjeto] = useState("");

  const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }

  const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

  return <View style={styles.parent}>

<View style={styles.footer}>

    <SubirArchivoButton/>

    <HomeButton navigation={navigation}/>

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
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: 'White'
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