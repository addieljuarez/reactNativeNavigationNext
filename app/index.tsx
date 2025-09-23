import { Link } from "expo-router";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";

function Space() {
  return(
    <View style={{height: 35}}/>
  )
}

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Text>El root unico es 
        app/index.tsx
      </Text>
      <Text>
         y el diseño root es 
        app/_layout.tsx que trae un stack
      </Text>

      <Text>
        Agregamos una nueva ruta, 
        app/details.tsx 
        y la agregamos al stack 
      </Text>

      <Text>
        &lt;Stack.Screen name=&quot;index&quot; &gt;
      </Text>
        
      <Text>
        &lt;Stack.Screen name=&quot;details&quot; &gt;
      </Text>
      <Link href={"/details"}>
        Abrir ruta detalle mediante un Link
      </Link>
      
      <Space />
      <Text>
        abrir una ruta que no existe mediante un link
      </Text>
      <Link href={"/noExist"}>
        No existe este link y muestra la pagina creada para mostrar cuando no existen
      </Link>

      <Space />
      <Text>
        envolvemos boton en un link
      </Text>
      <Link href={"/"}>
        <TouchableHighlight
          style={{
            backgroundColor: 'gray',
            height: 50,
            width: 300,
            borderRadius: 20,
            justifyContent: 'center',
            alignSelf: 'center'
          }}
          onPress={() => {}}
        >
          <Text style={{
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            Este es un texto en un TouchableHighlight y evuelto en un link
          </Text>
        </TouchableHighlight>
      </Link>

      <Space />
      <Link href={'/(tabsDemo)'}>
        navegador en Tabs (agrupador) y cada Tabs trae su _layout
      </Link>

      <Space />
      <Link href={'/detailDynamic'}>
        Links dinamicos
      </Link>

      <Space />


      <Text>
      </Text>
      <Text>
      </Text>
      <Text>
      </Text>
    </ScrollView>
  );
}
