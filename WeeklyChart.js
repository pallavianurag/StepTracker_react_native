import React from 'react';
import { StyleSheet, View} from 'react-native';
import {  BarChart } from 'react-native-chart-kit';

const WeeklyChart = () =>{
    return(
<View style={styles.chartContainer}>
        <BarChart
  data={{
    labels: [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4'

    ],
    datasets: [
      {
        data: [500, 6000, 1056, 4500 ],
      },
    ],
  }}
  width={375}
  height={200}
  chartConfig={{
    backgroundColor: '#cde6ff',
    backgroundGradientFrom: '#CDE6FF',
    backgroundGradientTo: '#CDE6FF',
    decimalPlaces: 0,
    getBarColor: (dataPoint, dataPointIndex) => {
      return dataPoint >= 3000 ? "green" : "red";
    },  
    color: (opacity = 1) => `rgba(0, 76, 155, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
    borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  }}
  
/>
      </View>)
}

export default WeeklyChart;

const styles = StyleSheet.create({

    chartContainer: {
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      top : 140
    },
    
  });
  