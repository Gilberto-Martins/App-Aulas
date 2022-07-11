import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page from './views/Pages'

export default function App() {
  const props = {
    empresa: 'Webdesign em foco',
    name: 'Gilberto'
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Open up App.js to start working on your app!</Text>

      <Page {...props} />

      {/**
        <Page empresa='Programação'/>
        <Page empresa='Mobile'/>
        <Page empresa='Devs'/>
       */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
