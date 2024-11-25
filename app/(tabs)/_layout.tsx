import { Platform, Text } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { HapticTab } from "@/components/ui/haptic-tab";
import { useAuth } from "@/lib/auth";

const TabsLayout = () => {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen name="acquire" options={{ title: "Acquire" }} />
      <Tabs.Screen name="provide" options={{ title: "Provide" }} />
      <Tabs.Screen name="review" options={{ title: "Review" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
};

export default TabsLayout;
