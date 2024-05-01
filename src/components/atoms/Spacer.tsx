// a spacer that creates space inbetween components

// These are the syles that i want for the spacer
// separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },

import React from "react";
import { View } from "react-native";

type SpacerProps = {
  size?: "small" | "medium" | "large";
};

export const Spacer = ({ size }: SpacerProps) => {
  let height;
  switch (size) {
    case "small":
      height = 10;
      break;
    case "medium":
      height = 20;
      break;
    case "large":
      height = 30;
      break;
    default:
      height = 20;
  }

  return <View style={{ marginVertical: height }} />;
};
