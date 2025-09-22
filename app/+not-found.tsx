import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen () {
  return(
    <>
      <Stack.Screen options={{title: 'no existe'}} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'brown',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link href={'/dynamicLinks'}>
          Esta página es un ejemplo de una que no existe link de Ir a inicio
        </Link>
      </View>
    </>
  )
}