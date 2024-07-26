import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Navigation from './src/rotas/navigation';

import {Teste} from "../Adopets/src/paginas/Teste"/

const App = () => {
  return (
    <SafeAreaView style={estilos.tela}>
      {/* <Navigation /> */}
      <Teste/>
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
