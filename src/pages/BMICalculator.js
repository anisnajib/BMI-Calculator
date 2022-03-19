import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {

  const [BMIInputWeight, setBMIInputWeight] = React.useState("");
  const [BMIInputHeight, setBMIInputHeight] = React.useState("");

  renderBMICalculation = () => {
    let BMICalculation =  Math.floor((((BMIInputWeight / BMIInputHeight) / BMIInputHeight) * 10000) * 100) / 100

    let BMIstatus = ''
    if(BMICalculation < 18.5) {
      BMIstatus = 'Underweight'
    } else if(BMICalculation >= 18.5 && BMICalculation <= 24.9) {
      BMIstatus = 'Normal weight'
    } else if(BMICalculation >= 24.9 && BMICalculation <= 29.9) {
      BMIstatus = 'Overweight'
    } else {
      BMIstatus = 'Obesity'
    }

    return (
      <>
      <Text style={styles.text} >Your BMI metric system calculation is</Text>
      <Text style={styles.calculationText} >{BMICalculation}</Text>
      <Text style={styles.text} >You have a {BMIstatus}</Text>
      </>
    )
  }


    return (
      <View style={styles.container} >
        <Text style={styles.text} >Input Your Weight in kg</Text>
        <TextInput
          style={styles.input}
          onChangeText={setBMIInputWeight}
          value={BMIInputWeight}
        />
        <Text  style={styles.text}  >Input Your Height in cm</Text>
        <TextInput
          style={styles.input}
          onChangeText={setBMIInputHeight}
          value={BMIInputHeight}
        />

        {
          BMIInputWeight && BMIInputHeight ?
          renderBMICalculation()
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
