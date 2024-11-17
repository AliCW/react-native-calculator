import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Output from "../../components/Output";
import { calc } from "a-calc/es";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("");
  const [queryHistory, setQueryHistory] = useState([""]);
  const [recentEquate, setRecentEquate] = useState(false);
  const [recentDecimal, setRecentDecimal] = useState(false);

  const pressZero = () => {
    if (recentEquate) {
      setQuery("0");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "0");
    }
  };
  const pressOne = () => {
    if (recentEquate) {
      setQuery("1");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "1");
    }
  };
  const pressTwo = () => {
    if (recentEquate) {
      setQuery("2");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "2");
    }
  };
  const pressThree = () => {
    if (recentEquate) {
      setQuery("3");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "3");
    }
  };
  const pressFour = () => {
    if (recentEquate) {
      setQuery("4");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "4");
    }
  };
  const pressFive = () => {
    if (recentEquate) {
      setQuery("5");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "5");
    }
  };
  const pressSix = () => {
    if (recentEquate) {
      setQuery("6");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "6");
    }
  };
  const pressSeven = () => {
    if (recentEquate) {
      setQuery("7");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "7");
    }
  };
  const pressEight = () => {
    if (recentEquate) {
      setQuery("8");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "8");
    }
  };
  const pressNine = () => {
    if (recentEquate) {
      setQuery("9");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "9");
    }
  };

  const pressDecimal = () => {
    if (
      /[+*/-]/g.test(query[query.length - 1]) ||
      recentDecimal ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(true);
      setRecentEquate(false);
      setQuery(query + ".");

    }
  };

  const pressPlus = () => {
    if (
      /[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "+");
    }
  };

  const pressSubtract = () => {
    if (
      /[+*/-]/g.test(query[query.length - 1])
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "-");
    }
  };

  const pressMultiply = () => {
    if (
      /[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "*");
    }
  };

  const pressDivide = () => {
    if (
      /[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "/");
    }
  };

  const pressEquate = () => {
    if (
      /[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    )
      return;
    const split = query.split(/([?=+ ?=* ?=/ ?=-])/g);
    setRecentDecimal(false);
    setRecentEquate(true);
    setOutput(calc(split.join('')));
    if (queryHistory.length >= 6) {
      queryHistory.shift();
      setQueryHistory(
        [...queryHistory, query + `= ${calc(split.join(''))}`].reverse()
      );
    } else {
      setQueryHistory(
        [...queryHistory, query + `= ${calc(split.join(''))}`].reverse()
      );
    }
    setQuery(calc(split.join('')));
    if(/[.]/g.test(calc(split.join('')))){
      setRecentDecimal(true);
    }
  };

  const pressClear = () => {
    setOutput("");
    setQuery("");
    setQueryHistory([]);
    setRecentEquate(false);
    setRecentDecimal(false);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >

      <View style={styles.numberContainer}>
        <View style={styles.firstNumberContainer}>
          <View
            style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}
          >
            <TouchableOpacity
              onPress={pressOne}
              style={styles.numberButton}
              accessibilityLabel="1"
            >
              <Text style={styles.numberText}>1</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}
          >
            <TouchableOpacity
              onPress={pressTwo}
              style={styles.numberButton}
              accessibilityLabel="2"
            >
              <Text style={styles.numberText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressThree}
              style={styles.numberButton}
              accessibilityLabel="3"
            >
              <Text style={styles.numberText}>3</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 60,
              height: 75,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity
              onPress={pressDivide}
              style={styles.symbolButton}
              accessibilityLabel="divide by"
            >
              <Text style={styles.symbolText}>÷</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressFour}
              style={styles.numberButton}
              accessibilityLabel="4"
            >
              <Text style={styles.numberText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressFive}
              style={styles.numberButton}
              accessibilityLabel="5"
            >
              <Text style={styles.numberText}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressSix}
              style={styles.numberButton}
              accessibilityLabel="6"
            >
              <Text style={styles.numberText}>6</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: 60,
              height: 75,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity
              onPress={pressMultiply}
              style={styles.symbolButton}
              accessibilityLabel="multiplied by"
            >
              <Text style={styles.symbolText}>*</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressSeven}
              style={styles.numberButton}
              accessibilityLabel="7"
            >
              <Text style={styles.numberText}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressEight}
              style={styles.numberButton}
              accessibilityLabel="8"
            >
              <Text style={styles.numberText}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressNine}
              style={styles.numberButton}
              accessibilityLabel="9"
            >
              <Text style={styles.numberText}>9</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 60,
              height: 75,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity
              onPress={pressSubtract}
              style={styles.symbolButton}
              accessibilityLabel="minus"
            >
              <Text style={styles.symbolText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondNumberContainer}>
        <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
                onPress={pressClear}
                style={styles.clearButton}
                accessibilityLabel="clear"
            >
              <Text style={styles.symbolText}>C</Text>
            </TouchableOpacity>
        </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressDecimal}
              style={styles.numberButton}
              accessibilityLabel="point"
            >
              <Text style={styles.numberText}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressZero}
              style={styles.numberButton}
              accessibilityLabel="0"
            >
              <Text style={styles.numberText}>0</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 60,
              height: 75,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity
              onPress={pressPlus}
              style={styles.symbolButton}
              accessibilityLabel="plus"
            >
              <Text style={styles.symbolText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.equalsNumberContainer}>
          <View style={{ width: 170, height: 75, paddingTop: 10 }}>
            <TouchableOpacity
              onPress={pressEquate}
              style={styles.equalsButton}
              accessibilityLabel="equate"
            >
              <Text style={styles.equalsText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.outputContainer}>
        <View
          style={{
            backgroundColor: "#eeeeee",
            width: 320,
            borderRadius: 10,
            paddingTop: 15,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <TextInput
            keyboardType={"number-pad"}
            onChangeText={(num) => setQuery(num)}
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            {" "}
            {query}
          </TextInput>
        </View>
      </View>
      <Output output={output} history={queryHistory} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 50,
    fontWeight: "bold",

  },
  numberContainer: {
  },
  numberButton: {
    backgroundColor: "#AE1D5C",
    height: 75,
    borderRadius: 5,
  },
  numberText: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  symbolButton: {
    width: 75,
    height: 75,
    borderRadius: 5,
    backgroundColor: "#424242",
  },
  symbolText: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  firstNumberContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 5,
    margin: "auto",
    padding: 5,
  },
  secondNumberContainer: {
    alignItems: "flex-start",
    margin: "auto",
    flexDirection: "row",
    gap: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  equalsNumberContainer: {
    flexDirection: "row",
    margin: "auto",
  },
  equalsButton: {
    backgroundColor: "#FF6F00",
    height: 75,
    borderRadius: 5,
  },
  equalsText: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  clearButton: {
    backgroundColor: "#424242",
    height: 75,
    borderRadius: 5,
  },
  clearText: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFFFFF",
    fontSize: 25,
  },
  clearNumberContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  outputContainer: {
    alignItems: "flex-start",
    marginLeft: 5,
  },
  reactLogo: {
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
