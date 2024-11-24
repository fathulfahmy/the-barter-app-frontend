import { Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { HapticTab } from "@/components/ui/haptic-tab";

const TabsLayout = () => {
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
    </Tabs>
  );
};

export default TabsLayout;
