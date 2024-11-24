import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={styles.container}>
        <Link replace href="/">
          Go back to homepage
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
