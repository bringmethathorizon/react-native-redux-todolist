import React, { Component } from 'react';
import Header from './components/header/header';
import InputField from './components/inputField/inputField';
import MyModal from './components/inputField/MyModal';
import {
  StyleSheet, View
} from 'react-native';
import { Container, Content, Button,  Form, Item, Input, Label } from 'native-base';



class App extends Component{
  render() {
    return (
       <View>
            <Header/>
            <InputField/>
       </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 export default App;