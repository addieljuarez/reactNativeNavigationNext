import { Link } from "expo-router";
import { View } from "react-native";

export default function dynamicLinks() {
  return(
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Link href={'/detailDynamic/1'}>
        Link id 1
      </Link>
      <Link href={'/detailDynamic/2'}>
        Link id 2
      </Link>
      <Link href={{
        pathname: '/detailDynamic/[id]',
        params: {
          id: 'este para es id'
        }
      }}>
        Link id 3 con params
      </Link>
    </View>
  )
}