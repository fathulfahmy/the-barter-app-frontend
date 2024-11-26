import React from "react";
import { AuthProvider } from "@/lib/auth";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { AppDarkTheme, AppLightTheme } from "@/types/react-native-paper";

const Root = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? AppDarkTheme : AppLightTheme;

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Slot />
      </PaperProvider>
    </AuthProvider>
  );
};

export default Root;
