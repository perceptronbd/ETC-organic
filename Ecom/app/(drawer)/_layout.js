import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "../../components";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => CustomDrawerContent(props)}
      screenOptions={{
        headerTitle: "",
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Drawer.Screen
        name="points"
        options={{
          headerShown: true,
        }}
      />
    </Drawer>
  );
}
