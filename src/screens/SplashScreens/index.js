import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import { Text, Logo} from '../../components/atomos'

export const SplashScreens = () =>{
  return (
    <View style={styles.container}>
      <Logo/>
      <Text >If sul de minas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
