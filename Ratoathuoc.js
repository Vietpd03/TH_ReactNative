import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

class Ratoathuoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: '',
      conclusion: '',
      selectedDrugs: [],
      drugs: [
        { id: 1, name: 'Thuốc A' },
        { id: 2, name: 'Thuốc B' },
        { id: 3, name: 'Thuốc Cnnnnn' },
        { id: 4, name: 'Thuốc A' },
        { id: 5, name: 'Thuốc Bewfwf' },
        { id: 6, name: 'Thuốc Cwfwffff' },
        { id: 7, name: 'Thuốc Aggggg' },
        { id: 8, name: 'Thuốc Bnnnnn' },
        { id: 9, name: 'Thuốc Cnnnnnnn' },
        // Thêm các thuốc khác vào đây
      ],
    };
  }

  handleSelectDrug = (id) => {
    const { selectedDrugs } = this.state;
    const selectedIndex = selectedDrugs.indexOf(id);

    if (selectedIndex === -1) {
      // Nếu thuốc chưa được chọn, thêm vào danh sách
      this.setState({ selectedDrugs: [...selectedDrugs, id] });
    } else {
      // Nếu thuốc đã được chọn, loại bỏ khỏi danh sách
      const updatedDrugs = [...selectedDrugs];
      updatedDrugs.splice(selectedIndex, 1);
      this.setState({ selectedDrugs: updatedDrugs });
    }
  };

  render() {
    const { symptoms, conclusion, drugs } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ra Toa Thuốc</Text>
        <TextInput
          style={styles.input}
          placeholder="Triệu chứng bệnh"
          value={symptoms}
          onChangeText={(text) => this.setState({ symptoms: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Kết luận"
          value={conclusion}
          onChangeText={(text) => this.setState({ conclusion: text })}
        />
        <Text style={styles.subtitle}>Chọn danh sách thuốc:</Text>
        <ScrollView style={styles.drugList}>
          {drugs.map((drug) => (
            <CheckBox
              key={drug.id}
              title={drug.name}
              checked={this.state.selectedDrugs.includes(drug.id)}
              onPress={() => this.handleSelectDrug(drug.id)}
              containerStyle={styles.checkboxContainer}
            />
          ))}
        </ScrollView>
        <Button title="Xác nhận Toa Thuốc" onPress={() => console.log('Toa thuốc được ghi lại')} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Xemlichsukham')}>
        <Text style={styles.buttonText}>Xem lịch sử khám</Text>
        </TouchableOpacity>
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
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
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  drugList: {
    width: '80%',
    maxHeight: 200,
    marginBottom: 10,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  button: {
    fontSize:20,
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  
  },
});

export default Ratoathuoc;
