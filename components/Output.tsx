import { Image, StyleSheet, Platform, Button } from 'react-native';
import {calc, fmt} from "a-calc"
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

interface Answer {
    sum: string;
    output: string;
    history: string[];
}

export default function Output(props: Answer){

    return (
         <ThemedView style={styles.outputContainer}>
          <ThemedText type="title">Query: {props.sum}</ThemedText>
            <ThemedText type="title">Answer: {props.output}</ThemedText>
            <ThemedView>
              {props.history.map((query) => {
                return (
                  <ThemedView>
                    <ThemedText>{query}</ThemedText>
                  </ThemedView>
                )
              })}
            </ThemedView>
            
         </ThemedView>
    )
}


const styles = StyleSheet.create({
    outputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
  });
  