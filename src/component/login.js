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
        <Text style={styles.mainText}>Selamat Datang Kembali!</Text>
        <View>
          <TextInput
            placeholder={'Email'}
            style={styles.textInput}
            onChangeText={(text) => this.setState({email: text})}></TextInput>
          <View>
            <TextInput
              placeholder={'Kata Sandi'}
              secureTextEntry={true}
              style={styles.textInput2}></TextInput>
          </View>
          <TouchableOpacity>
            <Text style={styles.subText}>Lupa kata sandi?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () => this.props.navigation.navigate('Home')
              // , {
              // email: this.state.email,
              // })
            }>
            <View style={styles.viewLogin}>
              <Text
                style={styles.textLogin}
                // onPress={() =>
                //   this.props.navigation.navigate('Home', {
                //     email: this.state.email,
                //   })
                // }
              >
                Masuk
              </Text>
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
