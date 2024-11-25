import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@/lib/auth";

const ProfileDetail = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Text
        onPress={() => {
          logout();
        }}
      >
        Logout
      </Text>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({});
