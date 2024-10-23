import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0, // Tổng số tiền cần thanh toán
    };
  }

  handleDirectPayment = () => {
    // Xử lý thanh toán trực tiếp
    // Đưa ra các bước xác nhận thanh toán trực tiếp
  };

  handleOnlinePayment = (method) => {
    // Xử lý thanh toán trực tuyến qua ví điện tử
    // Phương thức thanh toán có thể là 'momo' hoặc 'zalo'
    // Đưa ra các bước xác nhận thanh toán trực tuyến
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thanh toán</Text>
        <Text style={styles.amount}>Tổng số tiền cần thanh toán: {this.state.totalAmount} VNĐ</Text>
        
         {/* Button thanh toán trực tiếp */}
         <TouchableOpacity style={styles.button} onPress={this.handleDirectPayment}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Thanh toán trực tiếp</Text>
          </View>
        </TouchableOpacity>
        {/* Button thanh toán qua Momo */}
        <TouchableOpacity style={styles.button} onPress={() => this.handleOnlinePayment('momo')}>
          <View style={styles.buttonContent}>
            <Image source={require('./momo.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Thanh toán qua Momo</Text>
          </View>
        </TouchableOpacity>

        {/* Button thanh toán qua Zalo Pay */}
        <TouchableOpacity style={styles.button} onPress={() => this.handleOnlinePayment('zalo')}>
          <View style={styles.buttonContent}>
            <Image source={require('./zalo.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Thanh toán qua Zalo Pay</Text>
          </View>
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
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  amount: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Payment;
