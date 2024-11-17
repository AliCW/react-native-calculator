import { Image, StyleSheet, Platform, Button } from "react-native";
import { calc, fmt } from "a-calc";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View, Text } from "react-native";
import { useState } from "react";

interface Answer {
  sum: string;
  output: string;
  history: string[];
}

export default function Output(props: Answer) {
  return (
    <View style={styles.outputContainer}>
      <View
        style={{
          backgroundColor: "#eeeeee",
          width: 320,
          borderRadius: 10,
          paddingTop: 15,
          paddingBottom: 10,
          paddingLeft: 10,
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Query: {props.sum}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#eeeeee",
          width: 320,
          borderRadius: 10,
          paddingTop: 15,
          paddingBottom: 10,
          paddingLeft: 10,
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          = {props.output}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#eeeeee",
          height: 100,
          width: 320,
          borderRadius: 10,
        }}
      >
        {props.history.map((query) => {
          return (
            <View>
              <Text style={{ color: "#808080", padding: 10 }} key={query}>
                {query}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outputContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 5,
  },
  historyContainer: {},
});
