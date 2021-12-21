import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Button } from './Button';

export function LoadButton({isLoading, onPress}) {
    return (<Button isCentered width={"50%"} margin={8} padding={8} onPress={() => !isLoading ? onPress() : null}>
      {
        isLoading ? <ActivityIndicator color="white" size="small"></ActivityIndicator> :
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Load More</Text>
      }
    </Button>)
  }
  