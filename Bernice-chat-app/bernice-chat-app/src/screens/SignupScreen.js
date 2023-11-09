import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const handleSignup = () => {
    if (password.length < 8) {
      Alert.alert("Password Length Error", "Password must be at least 8 characters long");
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };
    axios
      .post("http://localhost:3000/signup", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registratio successful",
          "You have been registered successfully"
        );
        setName("")
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred while registering"
        );
        console.log("Registration failed", error);
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
            Sign up
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Sign up your account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "grey" }}>
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                fontSize: name ? 18 : 18,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                color: "white",
                width: 300,
              }}
              placeholderTextColor={"white"}
              placeholder="enter your name"
            />
          </View>
          <View style={{ marginTop: 10 }}>
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

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "grey" }}>
              Image
            </Text>
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              style={{
                fontSize: image ? 18 : 18,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                color: "white",
                width: 300,
              }}
              placeholderTextColor={"white"}
              placeholder="enter your image"
            />
          </View>

          <Pressable
          onPress={handleSignup}
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
              Sign Up
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "grey", fontSize: 16 }}>
              Already have an account? Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
