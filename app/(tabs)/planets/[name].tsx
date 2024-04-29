import { Link, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import planets from "@/data/planets";

type PlanetPageProps = {};

const PlanetPage = (props: PlanetPageProps) => {
  const { name } = useLocalSearchParams<{ name: string }>();
  const planet = planets.find((planet) => planet.name === name);

  if (!planet) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No planet selected</Text>
        <Link href="/(tabs)">
          <Text>Go to planet selection</Text>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is - {name}</Text>
      {planet.moons.length > 0 ? (
        <>
          <Text>The name of this planet's moons are:</Text>
          {planet.moons.map((moon) => (
            <Text key={moon}>{moon}</Text>
          ))}
        </>
      ) : (
        <Text>This planet doesn't have any moons.</Text>
      )}
    </View>
  );
};

export default PlanetPage;

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
});
