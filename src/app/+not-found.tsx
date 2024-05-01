import { Link, Stack } from "expo-router";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <ImageBackground
      source={require("@/src/assets/images/void.jpg")}
      className="flex items-center justify-center"
      style={[styles.container, { width: "100%", height: "auto" }]}
      resizeMode="cover"
    >
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex items-center justify-center">
        <Text className="text-2xl font-bold text-white">
          Oops you fell in to the void.
        </Text>
        <Link href="/" className="mt-4 py-4">
          <Text className="text-base text-teal-400">
            Go back to your universe!
          </Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
