import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styleRegister';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Selamat Datang!</Text>
        <View>
          <TextInput
            placeholder={'Nama Panggilan'}
            style={styles.textInput}></TextInput>
          <TextInput placeholder={'Email'} style={styles.textInput}></TextInput>
          <TextInput
            placeholder={'Konfirmasi Email'}
            style={styles.textInput}></TextInput>
          <TextInput
            placeholder={'Kata Sandi'}
            secureTextEntry={true}
            style={styles.textInput2}></TextInput>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.viewLogin}>
              <Text style={styles.textLogin}>Daftar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.subText}>Sudah punya akun? Masuk sekarang!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
