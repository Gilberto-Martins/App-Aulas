import { View, Text} from 'react-native'



export default function Login({route}) {
    return(
        <View>
            <Text>Esse é o componente Login do Systema {route.params.id}</Text>
        </View>
    )
}