import { View, Text } from "react-native";
import { css } from '../assets/css/Css'


export default function Page(props) {
    return (
        <View style={css.container}>
            <Text style={css.text}>
                Minha empresa é {props.empresa} e seu fundador é {props.name}.
                Comprou o produto {props.produto} na seguinte quantiade {props.quantidade}
            </Text>
        </View>
    )
}