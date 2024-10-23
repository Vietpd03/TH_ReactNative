import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Danhsachkham from './Danhsachkham';
import Confirmlichkham from './Confirmlichkham';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: 'patient', // Giá trị mặc định cho vai trò
      modalVisible: false,
    };
  }

  handleLogin = () => {
    const { username, password, role } = this.state;
    // Kiểm tra điều kiện đăng nhập ở đây
    if (username === '' || password === '') {
      if (role === 'patient') {
        this.props.navigation.navigate('Danhsachlichkham');
      } else if (role === 'doctor') {
        this.props.navigation.navigate('Danhsachkham');
      } else if (role === 'nurse') {
        this.props.navigation.navigate('Confirmlichkham'); 
      } 
    }else {
      Alert.alert('Thông báo', 'Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }
  };
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>User name</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên đăng nhập"
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => this.setState({ modalVisible: true })}>
          <Text style={styles.buttonText}>Vai trò: {this.state.role}</Text>
        </TouchableOpacity>
        <Modal
  animationType="slide"
  transparent={true}
  visible={this.state.modalVisible}
  onRequestClose={() => {
    this.setState({ modalVisible: false });
  }}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.setState({ role: 'patient', modalVisible: false });
          }}
          style={styles.roleItem}>
          <Text>Bệnh nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ role: 'doctor', modalVisible: false });
          }}
          style={styles.roleItem}>
          <Text>Bác sĩ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ role: 'nurse', modalVisible: false });
          }}
          style={styles.roleItem}>
          <Text>Y tá</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
</Modal>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    marginBottom: 5,
  },
  TextInput:{
    width: "100%",
  },
  input: {
    width: 330,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  dropdownButton: {
    backgroundColor: 'lightgray',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  linkText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roleItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default Login;
