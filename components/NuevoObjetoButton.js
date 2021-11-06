import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, onChangeText, value, listItem, Button, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AgregarTextInput } from '../screens/Listas';

var props = (TextInput)

export default function NuevoObjetoButton() {

    return (
        <Button title= "Agregar Objeto"
        onPress = {props.propData}

      />   );

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