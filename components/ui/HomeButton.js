import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function HomeButton({navigation}) {

    return (
        <View style={localStyles.container}>
            <TouchableHighlight
                activeOpacity={0.9}
                underlayColor="white"
                onPress={() => navigation.navigate('Home')}
            >
                <View style={localStyles.button}>
                    <Text style={localStyles.text}>Volver</Text>
                </View>
            </TouchableHighlight>

        </View>);
}

const localStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 65,
        marginTop: 20
    },
    button: {
        alignSelf: "center",
        width: "15%",
        height: 55,
        backgroundColor: "#E50914",
        borderRadius: 50,
        shadowColor: "#E50914",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    text: {
        alignSelf: "center",
        color: "white",
        fontWeight: "250",
        fontSize: 25,
        marginTop:8
    },
    buttonContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        padding: 5
    }
});