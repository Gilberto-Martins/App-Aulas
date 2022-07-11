import { Text, View } from 'react-native';
import Page from './views/Pages';
import {css} from './assets/css/Css'

export default function App() {
  const props = {
    empresa: 'Webdesign em foco',
    name: 'Gilberto'
  }

  return (
    <View style={css.container}>
      <Text style={css.text}>Open up App.js to start working on your app!</Text>
      <Page {...props} />
      {/**
        <Page empresa='Programação'/>
        <Page empresa='Mobile'/>
        <Page empresa='Devs'/>
       */}

    </View>
  );
}
