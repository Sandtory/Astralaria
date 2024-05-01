import React from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-teal-500 px-5 py-3 rounded"
      onPress={onPress}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
};
