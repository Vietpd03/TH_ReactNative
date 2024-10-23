import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DatePicker from '@react-native-community/datetimepicker';
import TimePicker from '@react-native-community/datetimepicker';
import Danhsachlichkham from './Danhsachlichkham';

class AppointmentBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: '',
      appointments: [], // Danh sách các lịch khám đã đặt trong ngày
      date: new Date(), // Giá trị mặc định cho ngày tháng năm
      time: new Date(), // Giá trị mặc định cho giờ khám
      showDatePicker: false, // Để hiển thị DatePicker
      showTimePicker: false, // Để hiển thị TimePicker
    };
  }

  handleBookAppointment = () => {
    // Kiểm tra số lượng lịch khám đã đặt trong ngày
    if (this.state.appointments.length >= 100) {
      Alert.alert('Thông báo', 'Số lượng lịch khám trong ngày đã đầy. Vui lòng chọn ngày khám khác.');
      return;
    }

    // Xử lý đặt lịch khám
    // Đưa lịch khám mới vào danh sách các lịch đã đặt trong ngày
    const newAppointment = {
      selectedService: this.state.selectedService,
      date: this.state.date,
      time: this.state.time,
    };

    const updatedAppointments = [...this.state.appointments, newAppointment];
  this.setState({ appointments: updatedAppointments }, () => {
    console.log('State after booking appointment:', this.state.appointments);
    window.alert('Bạn đã đặt lịch khám thành công!');
  });
    // Gửi email thông báo cho bệnh nhân
  };


  render() {
    const remainingAppointments = 100 - this.state.appointments.length;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đặt lịch khám</Text>
        
        <ScrollView style={styles.scrollView}>
        <Text style={styles.label}>Chọn dịch vụ khám</Text>
          <CheckBox
            title='Dịch vụ A'
            checked={this.state.selectedService === 'Dịch vụ A'}
            onPress={() => this.setState({ selectedService: 'Dịch vụ A' })}
          />
          <CheckBox
            title='Dịch vụ B'
            checked={this.state.selectedService === 'Dịch vụ B'}
            onPress={() => this.setState({ selectedService: 'Dịch vụ B' })}
          />
          <CheckBox
            title='Dịch vụ C'
            checked={this.state.selectedService === 'Dịch vụ C'}
            onPress={() => this.setState({ selectedService: 'Dịch vụ C' })}
          />
        </ScrollView>
        <View style={styles.datePickerContainer}>
          <Button title="Chọn ngày" onPress={() => this.setState({ showDatePicker: true })} />
          {this.state.showDatePicker && (
            <DatePicker
              value={this.state.date}
              mode="date"
              onChange={(event, selectedDate) => this.setState({ date: selectedDate, showDatePicker: false })}
            />
          )}
        </View>
        <View style={styles.timePickerContainer}>
          <Button title="Chọn giờ" onPress={() => this.setState({ showTimePicker: true })} />
          {this.state.showTimePicker && (
            <TimePicker
              value={this.state.time}
              mode="time"
              onChange={(event, selectedTime) => this.setState({ time: selectedTime, showTimePicker: false })}
            />
          )}
        </View>
        <Button
          title="Đặt lịch"
          onPress={this.handleBookAppointment}
          style={styles.button}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Danhsachlichkham')} style={styles.button}>
            <Text style={styles.buttonText}>Xem danh sách lịch khám </Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label:{
    fontSize: 20,
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 20,
    height :200,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default AppointmentBooking;
