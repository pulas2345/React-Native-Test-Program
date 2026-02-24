import React from "react"
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

export default function NavMenu(props) {
  const [mode, setMode] = useState(false);
  return (
    <>
      <View
        style={{
          flex: 1,
          margin: 5,
          marginTop: "10%",
          padding: 10,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Switch
            trackColor={{ false: "#ffffff", true: "#000000" }}
            thumbColor={"#00CCFF"}
            onValueChange={() => {
              if (mode === false) {
                setMode(true);
                props.setThemeMode({
                  bg: "white",
                  navBg: "black",
                  tx: "black",
                  statusBar: "dark",
                });
              } else {
                setMode(false);
                props.setThemeMode({
                  bg: "black",
                  navBg: "#181818",
                  tx: "white",
                  statusBar: "light",
                });
              }
            }}
            value={props.tx === "black"}
            style={{ marginLeft: 10 }}
          />
          {/* <Text
              style={{
                color: props.tx,
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                marginLeft: 20,
              }}
            >
              Theme
            </Text> */}
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              margin: 5,
              backgroundColor: props.navBg,
              padding: 20,
              width: "47.5%",
              height: 70,
              borderRadius: 15,
              alignSelf: "center",
            }}
            onPress={() => {
              props.setNavOpen(false);
              props.setPage("Home");
            }}
          >
            <Text
              adjustsFontSizeToFit={true}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 30,
                alignSelf: "center",
              }}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              margin: 5,
              backgroundColor: props.navBg,
              padding: 20,
              width: "47.5%",
              height: 70,
              borderRadius: 15,
              alignSelf: "center",
            }}
            onPress={() => {
              props.setNavOpen(false);
              props.setPage("Jokes");
            }}
          >
            <Text
              adjustsFontSizeToFit={true}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 30,
                alignSelf: "center",
              }}
            >
              Jokes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
