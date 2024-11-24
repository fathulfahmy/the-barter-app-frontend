import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(true);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        {isAuthenticated ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <Stack.Screen name="(auth)" />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default RootLayout;
