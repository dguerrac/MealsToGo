import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; // to control, to style statusBar on devices

import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
