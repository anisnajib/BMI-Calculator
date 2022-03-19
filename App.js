import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import TopTabs from './src/components/TopTabs'
import BMICalculator from './src/pages/BMICalculator'
import SmallestFinder from './src/pages/SmallestFinder'

const App = () => {
  // Main Class State
  const [pageMode, setpageMode] = useState('BMI');

  // Class functions
  const navigateTo = (data) => {
    setpageMode(data)
  }


  // ----------------------------------- Main Page
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TopTabs navigateTo={(data) => navigateTo(data)} />
        {
          pageMode == 'BMI' ? 
            <BMICalculator/>
            :
            <SmallestFinder/>
        }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
