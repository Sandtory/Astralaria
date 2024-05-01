interface Planet {
  name: string;
  moons: string[];
}

const planets: Planet[] = [
  {
    name: "Mercury",
    moons: [],
  },
  {
    name: "Venus",
    moons: [],
  },
  {
    name: "Earth",
    moons: ["Moon"],
  },
  {
    name: "Mars",
    moons: ["Phobos", "Deimos"],
  },
  {
    name: "Jupiter",
    moons: ["Io", "Europa", "Ganymede", "Callisto"],
  },
  {
    name: "Saturn",
    moons: [
      "Titan",
      "Rhea",
      "Iapetus",
      "Dione",
      "Tethys",
      "Enceladus",
      "Mimas",
    ],
  },
  {
    name: "Uranus",
    moons: ["Titania", "Oberon", "Umbriel", "Ariel", "Miranda"],
  },
  {
    name: "Neptune",
    moons: ["Triton", "Proteus", "Nereid"],
  },
];

export default planets;
