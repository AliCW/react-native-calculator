import { Image, StyleSheet, Platform, Button } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { View, Text } from 'react-native';

import Display from '../../components/Display';
import { calc } from 'a-calc/es'

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');
  const [queryHistory, setQueryHistory] = useState(['']);
  const [recentEquate, setRecentEquate] = useState(false);

  const pressDecimal = () => {
    setRecentEquate(false);
    setQuery(query + '.')
  };
  const pressZero = () => {
    if(recentEquate){
      setQuery('0');
      setRecentEquate(false);
    } else {
      setQuery(query + '0');
    };
  };
  const pressOne = () => {
    if(recentEquate){
      setQuery('1');
      setRecentEquate(false);
    } else {
      setQuery(query + '1');
    }
  };
  const pressTwo = () => {
    if(recentEquate){
      setQuery('2');
      setRecentEquate(false);      
    } else {
      setQuery(query + '2');
    }
  };
  const pressThree = () => {
    if(recentEquate){
      setQuery('3');
      setRecentEquate(false);
    } else {
      setQuery(query + '3');
    }
  };
  const pressFour = () => {
    if(recentEquate){
      setQuery('4');
      setRecentEquate(false);
    } else {
      setQuery(query + '4');
    }
  };
  const pressFive = () => {
    if(recentEquate){
      setQuery('5');
      setRecentEquate(false);
    } else {
      setQuery(query + '5');
    }
  };
  const pressSix = () => {
    if(recentEquate){
      setQuery('6');
      setRecentEquate(false);
    } else {
      setQuery(query + '6');
    }
  };
  const pressSeven = () => {
    if(recentEquate){
      setQuery('7');
      setRecentEquate(false);
    } else {
      setQuery(query + '7');
    }
  };
  const pressEight = () => {
    if(recentEquate){
      setQuery('8');
      setRecentEquate(false);
    } else {
      setQuery(query + '8');
    }
  };
  const pressNine = () => {
    if(recentEquate){
      setQuery('9');
      setRecentEquate(false);
    } else {
      setQuery(query + '9');
    }
  };

  const pressPlus = () => {
    setRecentEquate(false);
    setQuery(query + '+');
  };
  const pressSubtract = () => {
    setRecentEquate(false);
    setQuery(query + '-');
  };
  const pressMultiply = () => {
    setRecentEquate(false);
    setQuery(query + '*');
  };
  const pressDivide = () => {
    setRecentEquate(false);
    setQuery(query + '/');
  };
  const pressEquate = () => {
    if(query.length === 0) return;
    const split = query.split(/([?=+ ?=* ?=/ ?=-])/g);
    const check = split.map((element) => {
      if(/[+*/-]/g.test(element) === true){
        return ' ' + element + ' ';
      } else {
        return element;
      }
    })
    setRecentEquate(true);
    setQueryHistory([...queryHistory, query])
    setOutput(calc(check.join()));
    setQuery(calc(check.join()));
  };

  const pressClear = () => {
    setOutput('');
    setQuery('');
    setQueryHistory([]);
    setRecentEquate(false);
  }


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
      <Text style={styles.titleContainer}>Calc!</Text>

      <View style={styles.numberContainer}>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressOne} title="1" />
          </View>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressTwo} title="2" />
          </View>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressThree} title="3" />
          </View>
          <View
            style={{
              width: 60,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <Button onPress={pressDivide} title="/" />
          </View>
        </View>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressFour} title="4" />
          </View>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressFive} title="5" />
          </View>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressSix} title="6" />
          </View>

          <View
            style={{
              width: 60,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <Button onPress={pressMultiply} title="*" />
          </View>
        </View>
        <View style={styles.firstNumberContainer}>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressSeven} title="7" />
          </View>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressEight} title="8" />
          </View>
          <View style={{ width: 75, paddingTop: 10, paddingBottom: 5 }}>
            <Button onPress={pressNine} title="9" />
          </View>
          <View
            style={{
              width: 60,
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <Button onPress={pressSubtract} title="-" />
          </View>
        </View>
        <View style={styles.secondNumberContainer}>
          <View style={{ width: 75, paddingTop: 5, paddingBottom: 5 }}>
          <Button onPress={pressDecimal} title="." />
          </View>
          <View style={{ width: 75, paddingTop: 5, paddingBottom: 5 }}>
          <Button onPress={pressZero} title="0" />
          </View>
          <View style={{ width: 60, paddingLeft: 5, paddingTop: 5, paddingBottom: 5 }}>
          <Button onPress={pressPlus} title="+" />
          </View>
        </View>

        <View style={styles.equalsNumberContainer}>
          <View style={{width: 170, paddingTop: 10}}>
          <Button onPress={pressEquate} title="=" />
          </View>
        </View>
      </View>

      <View style={styles.clearNumberContainer}>
        <View style={{ width: 120}}>
        <Button onPress={pressClear} title="clear" />
        </View>
      </View>
      <Display output={output} sum={query} history={queryHistory} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {


  },
  numberContainer: {




  },
  firstNumberContainer: {
    alignItems: 'flex-start',

    flexDirection: 'row',
    gap: 2,

    margin: 'auto',
    padding: 5,

  },
  secondNumberContainer: {
    alignItems: 'flex-start',
    marginLeft: '28.5%',
    flexDirection: 'row',
    gap: 2,

    
    
  },
  equalsNumberContainer: {
    flexDirection: 'row',


    margin: 'auto',


  },
  clearNumberContainer: {
    margin: 'auto',

    
  },
  reactLogo: {
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
// const styles = StyleSheet.create({
//   titleContainer: {


//     gap: 8,
//   },
//   numberContainer: {
//     alignContent: 'center',



//   },
//   firstNumberContainer: {
//     alignItems: 'flex-start',

//     flexDirection: 'row',

//     gap: 4,
//     margin: 'auto',
//     width: '100%',

//     padding: '2%',


//   },
//   secondNumberContainer: {

//     alignItems: 'flex-start',

//     flexDirection: 'row',
//     marginLeft: '40%',
//     gap: 4,
    

//     padding: '2%',
    
//   },
//   clearNumberContainer: {

//     alignItems: 'flex-start',
  
//     flexDirection: 'row',
//     marginLeft: '40%',
//     gap: 4,
    

//     padding: '2%',
    
//   },
//   equalsNumberContainer: {

//   },
//   reactLogo: {
//     height: 0,
//     width: 0,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });