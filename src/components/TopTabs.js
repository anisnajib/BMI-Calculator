/**
 * Sample React Native TopTabs
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
 } from 'react-native';
 
 const TopTabs = (props) => {
   return (
     <View style={styles.container} >
        <TouchableOpacity onPress={() => props.navigateTo('BMI')} style={styles.button} >
            <Text>
                BMI Calculator
            </Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity onPress={() => props.navigateTo('FINDER')} style={styles.button}>
            <Text>
                Number Finder
            </Text>
        </TouchableOpacity>
     </View>
   );
 };
 
const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', height: 60, backgroundColor: 'rgba(0,0,0,0.1)' },
  button: { justifyContent: 'center', alignSelf: 'center',  },
  spacer: { height: 60, width: 1, backgroundColor: 'rgba(0,0,0,0.2)' }
});

 export default TopTabs;
 