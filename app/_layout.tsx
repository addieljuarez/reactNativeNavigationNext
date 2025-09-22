import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" />
    <Stack.Screen name="details" />
    <Stack.Screen name="(tabsDemo)" />
    <Stack.Screen name="dynamicLinks" />
  </Stack>;
}
