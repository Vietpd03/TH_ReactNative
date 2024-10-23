import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      avatar: null,
      gender: '',
      date: new Date(),
      showDatePicker: false,
    };
  }

  handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ avatar: result.uri });
    }
  };

  handleSelectGender = (selectedGender) => {
    this.setState({ gender: selectedGender });
  };

  handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ date: currentDate, showDatePicker: Platform.OS === 'ios' });
  };

  render() {
    const { avatar } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký tài khoản</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
        {avatar ? (
        <Image source={{ uri: avatar }} style={styles.avatar} />
      ) : (
        <TouchableOpacity style={styles.emptyAvatar} onPress={this.handleChoosePhoto}>
          <Text style={styles.avatarText}>Chose avatar</Text>
        </TouchableOpacity>
      )}
        
        <TextInput
          style={styles.input}
          placeholder="First name"
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          onChangeText={(text) => this.setState({ phone: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={(text) => this.setState({ address: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="User name"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableOpacity style={styles.genderContainer}>
          {/* Ô radio cho giới tính Nam */}
          <Text style={styles.buttonGender}>Gender</Text>
          <TouchableOpacity
            style={[styles.genderOption, this.state.gender === 'male' && styles.selectedOption]}
            onPress={() => this.handleSelectGender('male')}>
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>

          {/* Ô radio cho giới tính Nữ */}
          <TouchableOpacity
            style={[styles.genderOption, this.state.gender === 'female' && styles.selectedOption]}
            onPress={() => this.handleSelectGender('female')}>
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.datePickerButton} onPress={() => this.setState({ showDatePicker: true })}>
          <Text style={styles.buttonText}>Select Date of Birth</Text>
        </TouchableOpacity>
        {this.state.showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={this.handleDateChange}
          />
        )}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.linkText}>Đã có tài khoản?</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  selectedOption: {
    backgroundColor: '#007bff',
  },
  genderText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  datePickerButton: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  avatarText:{
    fontSize: 20,
    textAlign:'center',
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  buttonGender:{
    textAlign:'center',
    fontSize: 16,

  },
  genderContainer:{
    width: '80%',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
 
  
  linkText: {
    marginTop: 20,
    marginBottom: 50,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
    marginBottom: 10, 
  },
  emptyAvatar: {
    width: 120,
    height: 120,
    borderColor: 'gray',
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Đường viền
    borderColor: 'gray', // Màu viền
  },
  scrollView: {
    flexGrow: 1,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
});

export default Register;
