import { View, Text, StyleSheet } from "react-native";

interface Answer {
  output: string;
  history: string[];
}

export default function Output(props: Answer) {
  return (
    <View style={styles.outputContainer}>

      <View
        style={{
          backgroundColor: "#FDAE72",
          width: 320,
          borderRadius: 10,
          paddingTop: 15,
          paddingBottom: 10,
          paddingLeft: 10,
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {props.output}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#eeeeee",
          height: 135,
          width: 320,
          borderRadius: 10,
        }}
      >
        {props.history.map((query) => {
          return (
            <View>
              <Text style={{ color: "#808080", paddingTop: 3, paddingLeft: 10, }} key={query}>
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
