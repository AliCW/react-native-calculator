import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import Output from "../assets/components/Output";
import { calc } from "a-calc/es";
import { formatQuery } from "../utils/formatQuery";

export default function Index() {
  const [query, setQuery] = useState("");
  const [showQuery, setShowQuery] = useState("");
  const [output, setOutput] = useState("");
  const [queryHistory, setQueryHistory] = useState([""]);
  const [recentEquate, setRecentEquate] = useState(false);
  const [recentDecimal, setRecentDecimal] = useState(false);

  const pressZero = () => {
    if (recentEquate) {
      setQuery("0");
      setShowQuery("0");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "0");
      setShowQuery(query + "0");
    }
  };
  const pressOne = () => {
    if (recentEquate) {
      setQuery("1");
      setShowQuery("1");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "1");
      setShowQuery(query + "1");
    }
  };
  const pressTwo = () => {
    if (recentEquate) {
      setQuery("2");
      setShowQuery("2");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "2");
      setShowQuery(query + "2");
    }
  };
  const pressThree = () => {
    if (recentEquate) {
      setQuery("3");
      setShowQuery("3")
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "3");
      setShowQuery(query + "3");
    }
  };
  const pressFour = () => {
    if (recentEquate) {
      setQuery("4");
      setShowQuery("4");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "4");
      setShowQuery(query + "4");
    }
  };
  const pressFive = () => {
    if (recentEquate) {
      setQuery("5");
      setShowQuery("5");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "5");
      setShowQuery(query + "5");
    }
  };
  const pressSix = () => {
    if (recentEquate) {
      setQuery("6");
      setShowQuery("6");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "6");
      setShowQuery(query + "6");
    }
  };
  const pressSeven = () => {
    if (recentEquate) {
      setQuery("7");
      setShowQuery("7");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "7");
      setShowQuery(query + "7");
    }
  };
  const pressEight = () => {
    if (recentEquate) {
      setQuery("8");
      setShowQuery("8");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "8");
      setShowQuery(query + "8");
    }
  };
  const pressNine = () => {
    if (recentEquate) {
      setQuery("9");
      setShowQuery("9");
      setRecentEquate(false);
      setRecentDecimal(false);
    } else {
      setQuery(query + "9");
      setShowQuery(query + "9");
    }
  };

  const pressDecimal = () => {
    if (/[+*/-]/g.test(query[query.length - 1]) ||
      recentDecimal ||
      query.length === 0) 
      {
        return;
    } else {
      setRecentDecimal(true);
      setRecentEquate(false);
      setQuery(query + ".");
      setShowQuery(query + ".");
    }
  };

  const pressPlus = () => {
    if (/[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "+");
      setShowQuery(query + "+");
    }
  };

  const pressSubtract = () => {

    if (query.length === 1 && query[query.length - 1] === "-") return;
    if (/[+*/]/g.test(query[query.length - 1]) || 
     query[query.length - 2] === "-" && query[query.length - 1] === "-"
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "-");
      setShowQuery(query + "-");
    }
  };

  const pressMultiply = () => {
    if (/[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "*");
      setShowQuery(query + "×");
    }
  };

  const pressDivide = () => {
    if (/[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "/");
      setShowQuery(query + "÷");
    }
  };

  const pressEquate = () => { 
    if (/[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    )
      return;
    const split = query.split(/([?=+ ?=* ?=/ ?=-])/g); 
    setRecentDecimal(false);
    setRecentEquate(true);
    setOutput(calc(split.join(''), {_error: "Invalid Equation"}));
    if (queryHistory.length >= 9) {
      queryHistory.shift();
      setQueryHistory(
        [...queryHistory, formatQuery(query.split(/([?=+ ?=* ?=/ ?=-])/g).join('')) + `   =   ${calc(split.join(''), {_error: "Invalid Equation"} )}`]
      );
    } else {
      setQueryHistory(
        [...queryHistory, formatQuery(query.split(/([?=+ ?=* ?=/ ?=-])/g).join('')) + `   =   ${calc(split.join(''), {_error: "Invalid Equation"} )}`]
      );
    }
    setQuery(calc(split.join(''),{_error: "Invalid Equation"}));
    if(/[.]/g.test(calc(split.join(''), {_error: "Invalid Equation"}))){
      setRecentDecimal(true);
    }
  };

  const textInputChange = (string: string) => { // allows user to provide incorrect input
    setQuery(string);
    console.log(string, "textInputChange<<<")
    setShowQuery(formatQuery(string));
  };

  const pressClear = () => {
    setOutput("");
    setQuery("");
    setShowQuery("");
    setQueryHistory([]);
    setRecentEquate(false);
    setRecentDecimal(false);
  };

  return (
    <ScrollView style={styles.content}> 
      <View>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressOne}
              style={styles.numberButton}
              accessibilityLabel="1"
            >
              <Text style={styles.numberText}>1</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 75, height: 75, paddingTop: 10, paddingBottom: 5 }}>
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

          <View style={{ width: 60, height: 75, paddingLeft: 5, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressDivide}
              style={styles.symbolButton}
              accessibilityLabel="divide by"
            >
              <Text style={styles.numberText}>÷</Text>
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

          <View style={{ width: 60, height: 75, paddingLeft: 5, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressMultiply}
              style={styles.symbolButton}
              accessibilityLabel="multiplied by"
            >
              <Text style={styles.numberText}>×</Text>
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

          <View style={{ width: 60, height: 75, paddingLeft: 5, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressSubtract}
              style={styles.symbolButton}
              accessibilityLabel="minus"
            >
              <Text style={styles.numberText}>-</Text>
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
              <Text style={styles.numberText}>C</Text>
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

          <View style={{ width: 60, height: 75, paddingLeft: 5, paddingTop: 10, paddingBottom: 5 }}>
            <TouchableOpacity
              onPress={pressPlus}
              style={styles.symbolButton}
              accessibilityLabel="plus"
            >
              <Text style={styles.numberText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.equalsNumberContainer}>
          <View style={{ width: 334, height: 85, paddingTop: 10 }}>
            <TouchableOpacity
              onPress={pressEquate}
              style={styles.equalsButton}
              accessibilityLabel="equate"
            >
              <Text style={styles.numberText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <View style={styles.outputContainer}>
        <View
          style={{
            backgroundColor: "#DBDBDB",
            width: 320,
            borderRadius: 10,
            paddingTop: 15,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <TextInput
            keyboardType={"number-pad"}
            onChangeText={(num) => textInputChange(num)}
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            {}
            {formatQuery(showQuery)}
          </TextInput>
        </View>
      </View>

      <Output output={output} history={queryHistory} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 32,
    paddingTop: 13,
  },
  numberButton: {
    backgroundColor: "#AE1D5C",
    height: 75,
    borderRadius: 5,
  },
  numberText: {
    flex: 1,
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
  clearButton: {
    backgroundColor: "#424242",
    height: 75,
    borderRadius: 5,
  },
  firstNumberContainer: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 5,
  },
  secondNumberContainer: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 5,
    paddingBottom: 5
  },
  equalsNumberContainer: {
    flex: 1,
    flexDirection: "row",   
  },
  equalsButton: {
    flex: 1,
    marginTop: 5,
    marginLeft: 165,
    marginBottom: 10,
    marginRight: 5,
    flexDirection: "row",
    backgroundColor: "#FF6F00",
    height: 75,
    borderRadius: 5,
  },
  outputContainer: {
    marginLeft: 5,
  },
});
