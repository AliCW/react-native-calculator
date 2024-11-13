import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type QueryProps = {
    sum: string;
}

export default function Display(props: QueryProps) {
    return (

        <ThemedText type="title">{props.sum}</ThemedText>
        
    )
}