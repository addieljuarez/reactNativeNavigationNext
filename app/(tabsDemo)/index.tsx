import { Link } from "expo-router";
import { View } from "react-native";

export default function tabHome() {
  return(
    <View
      style={{
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Link href={'/(tabsDemo)/(home)'}>
        Este link es otro Tab Anidado
      </Link>
    </View> 
  )
}