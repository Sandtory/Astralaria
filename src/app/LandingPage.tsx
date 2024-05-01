import {
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Text } from "@/src/components/Themed";
import { router } from "expo-router";
import { Spacer } from "@/src/components/atoms/Spacer";

export default function LandingPage() {
  return (
    <ImageBackground
      source={require("@/src/assets/images/neuron.jpg")}
      style={[styles.container, { width: "100%", height: "auto" }]}
      resizeMode="cover"
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Text style={[styles.title, { fontSize: 50 }]}>Astralaria</Text>
        <Spacer />
        <Text style={styles.title}>Explore the wonders of space</Text>
        <Spacer />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/(tabs)");
          }}
        >
          <Text style={styles.buttonText}>Start Exploring!</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ecf4f6",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#004f70",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#ecf4f6",
  },
});
