import { Image, StyleSheet, Platform, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import Output from '../components/Output'


interface QueryProps {
  sum: string;
  output: string;
  history: string[];
}

interface OutputProps {
  sum: string;
  output: string;
  history: string[];
}

const SendOutput = (props: OutputProps) => {
  return (
    <Output sum={props.sum} output={props.output} history={props.history}/>
  )
}

export default function Display(props: QueryProps) {

    return (
        <ThemedView style={styles.titleContainer}>


        <SendOutput sum={props.sum} output={props.output} history={props.history}/>
        </ThemedView>
    )
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
  });
  