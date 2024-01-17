import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from "react-native";

const Main = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textTittle}>Opciones</Text>
          </View>
          <View style={styles.body}>
            <Button title="euler mejorado" onPress={() => navigation.navigate('Euler')}></Button>
            <Button title="Runge-Kutta" onPress={() => navigation.navigate('Runge-Kutta')}></Button>
            <Button title="Newton-Raphson" onPress={() => navigation.navigate('Newton-Raphson')}></Button>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: 50,
      padding: 40,
    },
    header: {
      alignItems: 'center',
    },
    body: {
      flex: 1,
      justifyContent: 'space-evenly'
    },
    textTittle:{
      fontSize: 30,
      fontWeight: 'bold'
    },
    button: {
    }
  });

export default Main