import React from "react";
import { AuthProvider } from "@/lib/auth";
import { Slot } from "expo-router";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

const Root = () => {
  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Root;
