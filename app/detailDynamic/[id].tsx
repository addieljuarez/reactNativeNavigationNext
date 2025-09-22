import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailScreen() {
  const { id } = useLocalSearchParams()

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red',
      }}
    >
      <Text>
        este es el ID {id}
      </Text>
    </View>
  )
}