import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styleLogin';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Selamat Datang Kembali!</Text>
        <View>
          <TextInput placeholder={'Email'} style={styles.textInput}></TextInput>
          <TextInput
            placeholder={'Kata Sandi'}
            secureTextEntry={true}
            style={styles.textInput2}></TextInput>
          <TouchableOpacity onPress={() => alert('Harap diingat kembali.')}>
            <Text style={styles.subText}>Lupa kata sandi?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.viewLogin}>
              <Text style={styles.textLogin}>Masuk</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.subText2}>ATAU</Text>
        </View>
        <TouchableOpacity onPress={() => alert('Akun Google.')}>
          <View style={styles.viewLogin2}>
            <Text style={styles.textLogin}>Lanjut dengan Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.subText}>Belum punya akun? Daftar sekarang!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
