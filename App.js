import React, { useState, useEffect } from 'react';
import { Alert, Button, SafeAreaView, Text, View } from 'react-native';
import { css } from './assets/css/Css';
import Page from './views/Pages';


export default function App() {
  const [product, setProduct] = useState('bola');
  const [quantity, setQuantity] = useState(0);

  
  useEffect( ()=> {
    if (quantity > 0) {
      Alert.alert('Novo produto adicionado')
    }
  }, [quantity])
  

  const props = {
    empresa: 'Webdesign em foco',
    name: 'Gilberto',
    produto: product,
    quantidade: quantity,
  }

  return (
    <SafeAreaView style={css.container}>
      <View style={css.container}>
        <Page {...props} />
        <Button title='Adicionar Proutos' onPress={() => setQuantity(quantity + 1)}></Button>
        <Text>{product}</Text>
      </View>
    </SafeAreaView>
  );
}
