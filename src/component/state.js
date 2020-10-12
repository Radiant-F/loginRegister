import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class State extends Component {
  constructor() {
    super();
    this.state = {
      asal: 'bandung',
    };
  }
  rubahName = () => {
    this.setState({asal});
  };
  render() {
    return (
      <View>
        <Text onPress={() => this.rubahName()}> textInComponent </Text>
      </View>
    );
  }
}

export default State;
