import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Test from './src/paginas/Teste';

const App = () => {
  return (
    <SafeAreaView style={estilos.tela}>
      <Test />
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
