import { StyleSheet, View } from "react-native";
import planets from "@/data/planets";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Spacer } from "@/components/atoms/Spacer";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planet App</Text>
      <Spacer />
      <Text style={styles.title}>Choose a planet:</Text>
      <Spacer />
      {planets.map((planet) => (
        <Link key={planet.name} href={`/planets/${planet.name}`}>
          <Text>{planet.name}</Text>
        </Link>
      ))}
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
