import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "../../components";
import COLOR from "../../constants/COLOR";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => CustomDrawerContent(props)}
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
      }}
    />
  );
}
