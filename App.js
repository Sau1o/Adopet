import React from "react";
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={estilos.tela}>
      <Text>APP OK</Text>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
