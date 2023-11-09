import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.replace("Home");
        } else {
          // show login screen itself
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    checkLoginStatus()

  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);

        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("login failed", "invalid email or password");
        console.log("login failed", error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "600" }}>
            Login
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15, color:"white" }}>
            Log into your account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "grey" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                color: "white",
                width: 300,
              }}
              placeholderTextColor={"white"}
              placeholder="enter your email"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "grey" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                color: "white",
                width: 300,
              }}
              placeholderTextColor={"white"}
              placeholder="enter your password"
            />
          </View>
          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Signup")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "grey", fontSize: 16 }}>
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
