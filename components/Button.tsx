import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import React, { ReactNode } from "react";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({ style, children, textStyle, onPress }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[{
        backgroundColor: Colors.accent,
        paddingHorizontal: Spacing.padding.xl,
        paddingVertical: Spacing.padding.base,
        borderRadius: Spacing.padding.base,
        alignItems: "center",
      }, style]}
    >
      <Text
        style={[{
          fontSize: FontSize.base,
          fontFamily: Font["poppins-regular"],
        }, textStyle]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
