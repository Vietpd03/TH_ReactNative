import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert, Image, TouchableOpacity } from 'react-native';
import Login from './Login'; 
import Ratoathuoc from './Ratoathuoc';

class Xemlichsukham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [
        { id: 1, date: '2024-02-20', time: '10:00 AM',Text: 'Waiting' },
        { id: 2, date: '2024-02-21', time: '11:00 AM' },
        { id: 3, date: '2024-02-22', time: '02:00 PM' },
        { id: 4, date: '2024-02-20', time: '10:00 AM' },
        { id: 5, date: '2024-02-21', time: '11:00 AM' },
        { id: 6, date: '2024-02-22', time: '02:00 PM' },
        { id: 7, date: '2024-02-20', time: '10:00 AM' },
        { id: 8, date: '2024-02-21', time: '11:00 AM' },
        { id: 9, date: '2024-02-22', time: '02:00 PM' },
      ], // Danh sách các lịch khám
    };
  }

  componentDidMount() {
    // Lấy dữ liệu lịch khám từ API khi trang được tải
    this.fetchAppointments();
  }

  fetchAppointments = () => {
    // Gọi API để lấy danh sách các lịch khám
    // Ví dụ:
    fetch('https://example.com/api/appointments')
      .then((response) => response.json())
      .then((data) => {
        // Cập nhật state với dữ liệu lịch khám từ API
        this.setState({ appointments: data });
      })
      .catch((error) => {
        console.error('Error fetching appointments: ', error);
      });
  };

  handleCancelAppointment = (id) => {
    // Gửi yêu cầu hủy lịch khám đến API
    // Ví dụ:
    fetch(`https://example.com/api/appointments/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // Xóa lịch khám khỏi danh sách và cập nhật lại state
        const updatedAppointments = this.state.appointments.filter(
          (appointment) => appointment.id !== id
        );
        this.setState({ appointments: updatedAppointments });
        Alert.alert('Thông báo', 'Đã hủy lịch khám thành công!');
      })
      .catch((error) => {
        console.error('Error canceling appointment: ', error);
      });
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>Ngày: {item.date}</Text>
      <Text>Thời gian: {item.time}</Text>
      <Text>Trạng thái: {item.Text}</Text>
      
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('./momo.png')} style={styles.avatar} />
          <Text style={styles.username}>Tên bệnh nhân</Text>
          
        </View>
        <Text style={styles.title}>Danh sách lịch đã khám</Text>
        <FlatList
          data={this.state.appointments}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
        
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    marginRight: 'auto',
  },
  list: {
    width: '80%',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
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
  buttonText: {
    color: 'white',
  },
});

export default Xemlichsukham;
