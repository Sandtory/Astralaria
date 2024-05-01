import { Link, router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import planets from "@/src/data/planets";
import { Text } from "@/src/components/Themed";
import { Button } from "@/src/components/molecules/Button";
import { Spacer } from "@/src/components/atoms/Spacer";

const PlanetPage = () => {
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
      <Text className="text-2xl font-semibold py-1">This is - {name}</Text>
      {planet.moons.length > 0 ? (
        <>
          <Text>The name of this planet's moons are:</Text>
          {planet.moons.map((moon) => (
            <Text className="py-1" key={moon}>
              {moon}
            </Text>
          ))}
        </>
      ) : (
        <Text>This planet doesn't have any moons.</Text>
      )}
      <Spacer size="small" />
      <Button title="Go Back" onPress={() => router.push("/(tabs)")}></Button>
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
