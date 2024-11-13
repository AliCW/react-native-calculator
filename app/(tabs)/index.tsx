import { Image, StyleSheet, Platform, Button } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Display from '../../components/display';

type QueryProps = {
  sum: string;
}

const ProcessQuery = (props: QueryProps) => {
  return (
      <Display sum={props.sum}/>
  )
}

export default function HomeScreen() {
  const [query, setQuery] = useState("");

  const pressZero = () => {
    setQuery(query + "0");
  }
  const pressOne = () => {
    setQuery(query + "1");
  };
  const pressTwo = () => {
    setQuery(query + "2");
  };
  const pressThree = () => {
    setQuery(query + "3");
  };
  const pressFour = () => {
    setQuery(query + "4");
  };
  const pressFive = () => {
    setQuery(query + "5");
  };
  const pressSix = () => {
    setQuery(query + "6");
  };
  const pressSeven = () => {
    setQuery(query + "7");
  };
  const pressEight = () => {
    setQuery(query + "8");
  };
  const pressNine = () => {
    setQuery(query + "9");
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedText type="title">Calc!</ThemedText>
        <HelloWave />
      <ThemedView style={styles.titleContainer}>
        <Button
          onPress={pressZero}
          title="0"
        />
        <Button
          onPress={pressOne}
          title="1"
        />
        <Button
          onPress={pressTwo}
          title="2"
        />
        <Button
          onPress={pressThree}
          title="3"
        />
        <Button
          onPress={pressFour}
          title="4"
        />
        <Button
          onPress={pressFive}
          title="5"
        />
        <Button
          onPress={pressSix}
          title="6"
        />
        <Button
          onPress={pressSeven}
          title="7"
        />
        <Button
          onPress={pressEight}
          title="8"
        />
        <Button
          onPress={pressNine}
          title="9"
        />
      </ThemedView>
      <ProcessQuery sum={query} />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
