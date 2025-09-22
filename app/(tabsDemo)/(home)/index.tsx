import { Text, View } from "react-native";

export default function Home(){
  return(
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>
        Este es un tab anidado
      </Text>
    </View>
  )
}