import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; // Import Login component from Login.js
import Register from './Register'; // Import Register component from Register.js
import Danhsachlichkham from './Danhsachlichkham';
import AppointmentBooking from './Datlichkham';
import Danhsachkham from './Danhsachkham';
import Confirmlichkham from './Confirmlichkham';
import Ratoathuoc from './Ratoathuoc';
import Xemlichsukham from './Xemlichsukham';
import Payment from './Thanhtoan';


const Stack = createStackNavigator();

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Phòng khám XYZ</Text>
        <Text style={styles.subtitle}>Địa chỉ: 123 Đường ABC, Quận XYZ</Text>
        <Text style={styles.subtitle}>Số điện thoại: 0123 456 789</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Remove LoginScreen and RegisterScreen components

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Danhsachlichkham" component={Danhsachlichkham} />
        <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
        <Stack.Screen name="Datlichkham" component={AppointmentBooking} />
        <Stack.Screen name="Danhsachkham" component={Danhsachkham} />
        <Stack.Screen name="Confirmlichkham" component={Confirmlichkham} />
        <Stack.Screen name="Ratoathuoc" component={Ratoathuoc} />
        <Stack.Screen name="Xemlichsukham" component={Xemlichsukham} />
        <Stack.Screen name="Thanhtoan" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
