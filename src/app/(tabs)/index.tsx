import { StyleSheet, View } from "react-native";
import planets from "@/src/data/planets";

import { Text } from "@/src/components/Themed";
import { Link } from "expo-router";
import { Spacer } from "@/src/components/atoms/Spacer";
import { Button } from "@/src/components/molecules/Button";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Astralaria!</Text>
      <Spacer />
      <Text style={styles.title}>Choose a planet:</Text>
      <Spacer />
      {planets.map((planet) => (
        <Link
          className="py-1 "
          key={planet.name}
          href={`/planets/${planet.name}`}
        >
          <Text>{planet.name}</Text>
        </Link>
      ))}
      <Link href={"/Void"}>
        <Text style={{ color: "darkred" }}>Void</Text>
      </Link>
      <Spacer />
      <Button title="Test" onPress={() => console.log("hello")} />
    </View>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
