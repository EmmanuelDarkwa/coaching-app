import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  name?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

const IconButton: React.FC<Props> = ({
  style,
  size = 24,
  color = Colors.text,
  name,
  onPress
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        {
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: Colors.border,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: Spacing.borderRadius.base,
        },
        style,
      ]}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
