import { Image, StyleSheet, Platform, Button } from 'react-native';
import {calc, fmt} from "a-calc"
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text } from 'react-native';
import { useState } from 'react';

interface Answer {
    sum: string;
    output: string;
    history: string[];
}

export default function Output(props: Answer){

    return (
         <ThemedView style={styles.outputContainer}>
          <View >
          <ThemedText type="title">Query: {props.sum}</ThemedText>
          </View>

          <View>
            <ThemedText type="title">Answer: {props.output}</ThemedText>
          </View>


            <ThemedView>
              {props.history.map((query) => {
                return (
                  <ThemedView>
                    <ThemedText key={query}>{query}</ThemedText>
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
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
  });
  