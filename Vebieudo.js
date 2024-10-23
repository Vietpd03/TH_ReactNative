import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

class Statistics extends Component {
  render() {
    const data = {
      labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6','T7','T8','T9','T10','T11','T12'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43,69,45,34,45,48.59],
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thống kê báo cáo</Text>
        <Text style={styles.subtitle}>Số lượng bệnh nhân đến khám theo tháng</Text>
        <LineChart
          data={data}
          width={400}
          height={300}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Statistics;
