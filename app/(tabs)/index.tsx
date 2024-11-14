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
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <Text style={styles.titleContainer}>Calc!</Text>
        <HelloWave />
      
      
      <View style={styles.numberContainer}>

<View style={styles.firstNumberContainer}>
        <Button
          onPress={pressOne}
          title='1'
        />
        <Button
          onPress={pressFour}
          title='4'
        />
        <Button
          onPress={pressSeven}
          title='7'
        />
</View>
<View style={styles.firstNumberContainer}>
        <Button
          onPress={pressTwo}
          title='2'
        />
        <Button
          onPress={pressFive}
          title='5'
        />
        <Button
          onPress={pressEight}
          title='8'
        />
</View>
<View style={styles.firstNumberContainer}>
        <Button
          onPress={pressThree}
          title='3'
        />
        <Button
          onPress={pressSix}
          title='6'
        />
        <Button
          onPress={pressNine}
          title='9'
        />

          <Button
            onPress={pressZero}
            title='0'
            />

          <Button
            onPress={pressDecimal}
            title='.'
            />

  </View>
<View style={styles.firstNumberContainer}>
        <Button
            onPress={pressPlus}
            title='+'
          />
          <Button
            onPress={pressSubtract}
            title='-'
          />
          <Button
            onPress={pressMultiply}
            title='*'
          />
          <Button
            onPress={pressDivide}
            title='/'
          />
<View style={styles.thirdNumberContainer}>
          <Button
            onPress={pressClear}
            title='clear'
          />
          <Button 
            onPress={pressEquate}
            title='='
        />
</View>
</View>
      </View>
      <Display output={output} sum={query} history={queryHistory}/>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 3,
    height: 'auto',
    width: 'auto',
    
  },
  firstNumberContainer: {
    height: '20%',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    paddingTop: '1%',
    paddingBottom: '1%',


  },
  secondNumberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',

    
  },

  thirdNumberContainer: {
    height: 'auto',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    paddingTop: '1%',
    paddingBottom: '1%',


  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
