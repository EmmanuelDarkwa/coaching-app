import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import { Workout as WorkoutType} from "../data";

interface Props {
  workout: WorkoutType;
  onPress?: () => void;
}

const Workout: React.FC<Props> = ({ workout,onPress }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      key={workout.id}
      style={{
        backgroundColor: Colors.primary,
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        overflow: "hidden",
      }}
    >
      <Image
        source={workout.image}
        style={{
          width: 270,
          height: 200,
        }}
      />
      <View
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <View
          style={{
            marginBottom: Spacing.margin.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppText>{workout.name}</AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="star" color={Colors.yellow} size={15} />
            <AppText
              style={{
                marginLeft: Spacing.margin.sm,
              }}
            >
              {workout.rating}
            </AppText>
          </View>
        </View>
        <AppText>{workout.coach}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Workout;

const styles = StyleSheet.create({});