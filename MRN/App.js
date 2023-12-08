import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Platform } from 'react-native';
import { Focus } from './src/features/Focus';


import { colors } from './src/utils/color';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight : 0,
    backgroundColor:colors.darkBlue
  },
  text:{
    color:colors.white
  }
});
