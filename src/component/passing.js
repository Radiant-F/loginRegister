import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class passing extends Component {
  render() {
    const {email} = this.props.route.params;
    console.log(email);
    return (
      <View>
        <Text> nama anda adalah: {email} </Text>
      </View>
    );
  }
}

export default passing;
