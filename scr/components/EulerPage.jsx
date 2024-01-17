import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Euler = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.requeriments}>Y':</Text>
                    <TextInput style={styles.inputs} placeholder="Escribe la funcion"/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.requeriments}>Y(1):</Text>
                    <TextInput style={styles.inputs} placeholder="Condicion inicial"/>
                </View>
            </View>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ff00'
    },
    requeriments: {
        fontSize: 35,
        marginRight: 10
    },
    inputs:{
        fontSize: 35
    }
})

export default Euler;