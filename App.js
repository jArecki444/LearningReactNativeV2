import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header';


export default class App extends Component {
  render() {
    return (
        <View>
            <Text>Test</Text>
            <Header></Header>
            
        </View>
        
    );
  }
}