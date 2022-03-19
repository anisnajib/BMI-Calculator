import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';


const App = () => {
    const [smallestNumber, setSmallestNumber] = useState(0);
    const [smallestResult, setSmallestResult] = useState(0);

    const rawNumber = [408, 6604, 32158, 84984, 8774, 34871]
    rawNumber.sort(function(a, b) {
      return a - b;
    });


    return (
      <View style={styles.container} >
        <Text style={styles.text} >From these Number {rawNumber.join(', ')}</Text>
        <Text style={styles.text} >Find the selected Nth smallest number</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="(Ex. 2, 3, 4)"
          onChangeText={(number) => {
              setSmallestNumber(number)
              if (number <= rawNumber.length) {
              let smallestNum = rawNumber[number - 1]
              setSmallestResult(smallestNum)
            } else {
              setSmallestResult('Error: number higher than the length of array')
            }
          }}
          value={smallestNumber}
        />
        {smallestResult ? 
        <Text style={styles.text} >
          Your result is {smallestResult}
        </Text>
        :
        null
      }
        </View>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    calculationText: { marginTop: 5, fontSize: 20},
    text: { marginTop: 20},
    input: {
      height: 60,
      width: '80%',
      borderRadius: 10,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
export default App;
