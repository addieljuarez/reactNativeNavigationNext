import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen () {
  return(
    <>
      <Stack.Screen options={{title: 'Esta página es un ejemplo de una que no existe'}} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'brown',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link href={'/'}>
          Ir a inicio
        </Link>
      </View>
    </>
  )
}