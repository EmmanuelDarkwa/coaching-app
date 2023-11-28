import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
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
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../config/fonts";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const { height } = Dimensions.get("window");

  const handlePress = () => navigate("Home");

  return (
    <SafeAreaView>
      <View style={{
        padding: Spacing.padding.base
      }}>
        <View style={{
          alignItems: "center",
          
        }}>
          <Text style={{
            fontSize:FontSize.xxl,
            color: Colors.accent,
            fontFamily: Font["poppins-bold"],
            marginVertical: Spacing.margin.lg
          }}>Login Here</Text>
          <Text style={{
            color: Colors.text,
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.sm,
            maxWidth: "60%",
            textAlign: "center"
          }}>Welcome back, you've been missed!</Text>
        </View>
        <View>
          <TextInput 
          placeholder="Email"
          style={{
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            padding: Spacing.padding.sm,
            backgroundColor: Colors.text,
            borderRadius: Spacing.borderRadius.sm,
            marginVertical: Spacing.margin.xl
          }}
          />

<TextInput 
          placeholder="Password"
          secureTextEntry
          style={{
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            padding: Spacing.padding.sm,
            backgroundColor: Colors.text,
            borderRadius: Spacing.borderRadius.sm,
            marginVertical: Spacing.margin.xl,
          }}
          />
        </View>
        <View>
          <Text>Forgot your password?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
