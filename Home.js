import React from "react"
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home(props) {
  const [displayBio, setDisplayBio] = useState(false);
  return (
    <View
      style={{
        paddingVertical: "20%",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 200, height: 200, resizeMode: "contain" }}
        source={require("./assets/react-logo.png")}
      />
      <Text
        style={{
          color: props.tx,
          fontSize: 50,
          fontWeight: "bold",
        }}
      >
        Hello!
      </Text>
      <View style={{ marginTop: 20 }}>
        {displayBio ? (
          <View>
            <Text
              style={{
                color: props.tx,
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              This is my first React Native app
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#00CCFF",
                width: 140,
                padding: 10,
                borderRadius: 15,
                alignSelf: "center",
              }}
              onPress={() => setDisplayBio(false)}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Show Less
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#00CCFF",
                width: 140,
                padding: 10,
                borderRadius: 15,
                alignSelf: "center",
              }}
              onPress={() => setDisplayBio(true)}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
