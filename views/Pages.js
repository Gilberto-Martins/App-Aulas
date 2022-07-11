import react from "react";
import { View ,Text } from "react-native";


export default function Page(props) {
    return(
        <View>
            <Text>Minha empresa é {props.empresa} e seu fundador é {props.name}</Text>
        </View>
    )
}