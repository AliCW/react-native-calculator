import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import Output from "../assets/components/Output";
import { calc } from "a-calc/es";
import { formatQuery } from "../utils/formatQuery";
import { aCalcFormat } from "../utils/a-calFormat";


export default function Index() {
  const [query, setQuery] = useState("");
  const [showQuery, setShowQuery] = useState("");
  const [output, setOutput] = useState("");
  const [queryHistory, setQueryHistory] = useState([""]);
  const [recentEquate, setRecentEquate] = useState(true);
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
    if (/[+*/%-]/g.test(query[query.length - 1]) ||
      recentDecimal ||
      query[query.length - 1] === "." ||
      query.length === 0) 
      {
        return;
    } else {
      setRecentDecimal(true);
      setRecentEquate(false);
      setQuery(query + ".");
      setShowQuery(query + ".");
    };
  };

  const pressPlus = () => {
    if (/[+*/%-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "+");
      setShowQuery(query + "+");
    };
  };

  const pressSubtract = () => {

    if (query.length === 1 && query[query.length - 1] === "-") return;
    if (/[+*/%]/g.test(query[query.length - 1]) || 
     query[query.length - 2] === "-" && query[query.length - 1] === "-"
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "-");
      setShowQuery(query + "-");
    };
  };

  const pressMultiply = () => {
    if (/[+*/%-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "*");
      setShowQuery(query + "×");
    };
  };

  const pressDivide = () => {
    if (/[+*/%-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "/");
      setShowQuery(query + "÷");
    };
  };


  const pressPercentage = () => {
    if (/[+*/%-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "%");
      setShowQuery(query + "%");
    };
  };

  const pressBack = () => {
    setQuery(query.slice(0, query.length - 1));
    setShowQuery(query.slice(0, query.length - 1));
    setRecentDecimal(false);
    setRecentEquate(false);
  };

  const pressOpenBracket = () => {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "(");
      setShowQuery(query + "(");
  };

  const pressCloseBracket = () => {
    if(/[+*/-]/g.test(query[query.length - 1]) || 
      query.length === 0 ||
      query[query.length - 1] === "("
    ) {
      return;
    }
    else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + ")");
      setShowQuery(query + ")");
    }
  };

  const pressPower = () => {
    if (/[+*/%-]/g.test(query[query.length - 1]) ||
      query.length === 0
    ) {
      return;
    } else {
      setRecentDecimal(false);
      setRecentEquate(false);
      setQuery(query + "**");
      setShowQuery(query + "^");
    };
  };


  const pressEquate = () => { 
    if (/[+*/-]/g.test(query[query.length - 1]) ||
      query.length === 0
    )
      return;
    const split = query.split(/([?=+ ?=* ?=/ ?=π ?=% ?=-])/g); 
    setRecentDecimal(false);
    setRecentEquate(true);
    setOutput(calc(aCalcFormat(split), {_error: "Syntax Error"}));
    if (queryHistory.length >= 9) {
      queryHistory.shift();
      setQueryHistory(
        [...queryHistory, formatQuery(query.split(/([?=+ ?=* ?=/ ?=π ?=% ?=-])/g).join('')) + `   =   ${calc(aCalcFormat(split), {_error: "Syntax Error"} )}`]
      );
    } else {
      setQueryHistory(
        [...queryHistory, formatQuery(query.split(/([?=+ ?=* ?=/ ?=π ?=% ?=-])/g).join('')) + `   =   ${calc(aCalcFormat(split), {_error: "Syntax Error"} )}`]
      );
    }
    setQuery(calc(aCalcFormat(split),{_error: "Syntax Error"}));
    if(/[.]/g.test(calc(aCalcFormat(split), {_error: "Syntax Error"}))){
      setRecentDecimal(true);
    }
  };

  const textInputChange = (string: string) => {
    setQuery(string);
    setShowQuery(formatQuery(string));
  };

  const pressClear = () => {
    setOutput("");
    setQuery("");
    setShowQuery("");
    setQueryHistory([]);
    setRecentEquate(true);
    setRecentDecimal(false); 
  };

  return (
    <ScrollView style={styles.content}> 
      <View>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressOne}
              style={styles.numberButton}
              accessibilityLabel="1"
            >
              <Text style={styles.numberText}>1</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressTwo}
              style={styles.numberButton}
              accessibilityLabel="2"
            >
              <Text style={styles.numberText}>2</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressThree}
              style={styles.numberButton}
              accessibilityLabel="3"
            >
              <Text style={styles.numberText}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 100, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressPlus}
              style={styles.wideSymbolButton}
              accessibilityLabel="plus"
            >
              <Text style={styles.numberText}>+</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.firstNumberContainer}>
          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressFour}
              style={styles.numberButton}
              accessibilityLabel="4"
            >
              <Text style={styles.numberText}>4</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressFive}
              style={styles.numberButton}
              accessibilityLabel="5"
            >
              <Text style={styles.numberText}>5</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressSix}
              style={styles.numberButton}
              accessibilityLabel="6"
            >
              <Text style={styles.numberText}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: 50, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressSubtract}
              style={styles.symbolButton}
              accessibilityLabel="subtract"
            >
              <Text style={styles.numberText}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: 50, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressPower}
              style={styles.symbolButton}
              accessibilityLabel="power"
            >
              <Text style={styles.numberText}>^</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.firstNumberContainer}>
          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressSeven}
              style={styles.numberButton}
              accessibilityLabel="7"
            >
              <Text style={styles.numberText}>7</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressEight}
              style={styles.numberButton}
              accessibilityLabel="8"
            >
              <Text style={styles.numberText}>8</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10}}>
            <TouchableOpacity
              onPress={pressNine}
              style={styles.numberButton}
              accessibilityLabel="9"
            >
              <Text style={styles.numberText}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 50, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressDivide}
              style={styles.symbolButton}
              accessibilityLabel="divide"
            >
              <Text style={styles.numberText}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 50, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressPercentage}
              style={styles.symbolButton}
              accessibilityLabel="percentage"
            >
              <Text style={styles.numberText}>%</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondNumberContainer}>
        <View style={{ width: 65, height: 65, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
                onPress={pressClear}
                style={styles.clearButton}
                accessibilityLabel="clear"
            >
              <Text style={styles.numberText}>C</Text>
            </TouchableOpacity>
        </View>

          <View style={{ width: 65, height: 65, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressDecimal}
              style={styles.bracketButton}
              accessibilityLabel="point"
            >
              <Text style={styles.numberText}>.</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressZero}
              style={styles.numberButton}
              accessibilityLabel="0"
            >
              <Text style={styles.numberText}>0</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 50, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressMultiply}
              style={styles.symbolButton}
              accessibilityLabel="multiply"
            >
              <Text style={styles.numberText}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 50, height: 55, paddingLeft: 5, paddingTop: 10, paddingBottom: 5}}>
            <TouchableOpacity
              onPress={pressBack}
              style={styles.symbolButton}
              accessibilityLabel="back"
            >
              <Text style={styles.numberText}>◄</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomNumberContainer}>
          <View style={{ width: 65, height: 65, paddingTop: 10, paddingBottom: 5, paddingRight: 15}}>
            <TouchableOpacity
              onPress={pressOpenBracket}
              style={styles.bracketButton}
              accessibilityLabel="close bracket"
            >
              <Text style={styles.numberText}>(</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 65, height: 65, paddingTop: 10, paddingBottom: 5, marginRight: 5}}>
            <TouchableOpacity
              onPress={pressCloseBracket}
              style={styles.bracketButton}
              accessibilityLabel="close bracket"
            >
              <Text style={styles.numberText}>)</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 200, height: 75, paddingTop: 5}}>
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
            accessibilityLabel="current sum"
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
    paddingLeft: 25,
    paddingTop: 13,
  },
  numberButton: {
    backgroundColor: "#AE1D5C",
    height: 65,
    width: 70,
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
    width: 55,
    height: 65,
    borderRadius: 5,
    backgroundColor: "#424242",
  },
  wideSymbolButton: {
    width: 112,
    height: 65,
    borderRadius: 5,
    backgroundColor: "#424242",
  },
  clearButton: {
    backgroundColor: "#424242",
    height: 135,
    width: 65,
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
  bottomNumberContainer: {
    flex: 1,
    flexDirection: "row",   
    gap: 8,
    marginLeft: 73,
    marginBottom: 20,
  },
  equalsButton: {
    flex: 1,
    marginTop: 5,
    marginRight: 87,
    flexDirection: "row",
    backgroundColor: "#FF6F00",
    height: 100,
    borderRadius: 5,
  },
  bracketButton:{
    backgroundColor: "#DA2571",
    height: 65,
    width: 70,
    borderRadius: 5,
  },
  outputContainer: {
    marginLeft: 8,
  },
});
