import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styleLogin';
import Props from './props';
import State from './state';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      eyeStatus: true,
      email: '',
    };
  }
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Halo</Text>
        <View>
          <TextInput
            placeholder={'Nama Anda'}
            style={styles.textInput}
            onChangeText={(text) => this.setState({email: text})}></TextInput>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Contact', {
                email: this.state.email,
              })
            }>
            <View style={styles.viewLogin}>
              <Text
                style={styles.textLogin}
                onPress={() =>
                  this.props.navigation.navigate('Contact', {
                    email: this.state.email,
                  })
                }>
                Kirim data ke screen Contact
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
