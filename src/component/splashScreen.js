import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import Navigation from './Navigation';
import gif from '../assets/tenor.gif';

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({status: false});
      console.log('Ini timeout');
    }, 3000);
  }
  render() {
    if (this.state.status) {
      return (
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Image source={gif} style={{height: '20%', resizeMode: 'contain'}} />
          <ActivityIndicator size="large" color="red" />
          <Text style={{textAlign: 'center'}}>Loading...</Text>
        </View>
      );
    }
    return <Navigation />;
  }
}
