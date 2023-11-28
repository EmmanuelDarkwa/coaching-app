import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Button from "../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

const OnBoardingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const { height } = Dimensions.get("window");

  const handlePress = () => navigate("Login");
  
  return (
    <ImageBackground
      source={require("../assets/images/onboarding1.jpg")}
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <LinearGradient
        style={{
          height: height / 2.5,
          padding: Spacing.padding.lg,
        }}
        colors={[`rgba(0,0,0,0.1)`, "#000"]}
      >
        <Text
          style={{
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Font["poppins-semiBold"],
            textAlign: "center",
          }}
        >
          Stay healthy even at home
        </Text>
        <Text
          style={{
            fontSize: FontSize.base,
            color: Colors.text,
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing.margin.base,
            marginBottom: Spacing.margin.xxl,
          }}
        >
          Test your resolve, lets know how bad you want it!
        </Text>
        
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: Spacing.margin.xxl
        }}>
          <TouchableOpacity 
           onPress={()=> navigate("Login")}
          style={{
            backgroundColor: Colors.accent,
            paddingHorizontal: Spacing.padding.sm,
            paddingVertical: Spacing.padding.sm,
            width: "48%",
            borderRadius: Spacing.borderRadius.sm
          }}>
            <Text style={{
                fontFamily: Font["poppins-regular"],
                color: Colors.background,
                textAlign: "center",
                fontSize: FontSize.lg
            }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{
            backgroundColor: Colors.background,
            borderColor: Colors.accent,
            paddingHorizontal: Spacing.padding.sm,
            paddingVertical: Spacing.padding.sm,
            width: "48%",
            borderRadius: Spacing.borderRadius.sm
          }}>
            <Text style={{
                fontFamily: Font["poppins-regular"],
                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.lg
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
