import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useAuth } from "@/lib/auth";

const Login = () => {
  const { login } = useAuth();

  return (
    <View>
      <Text
        onPress={() => {
          login();
          router.replace("/acquire");
        }}
      >
        Login
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
