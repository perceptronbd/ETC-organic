import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-m": require("../assets/fonts/Montserrat-Medium.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
