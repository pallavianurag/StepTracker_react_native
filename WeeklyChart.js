import React from 'react';
import { StyleSheet, View} from 'react-native';
import {  BarChart } from 'react-native-chart-kit';
import { readString, readRemoteFile } from 'react-native-csv'
const data = require('./data.json');

const getUserdata = (userId) => {
  userData = {}
  for(i = 0; i < data.length; i++) {
    if(data[i].Id === userId) {
      userData[data[i].ActivityDay] = data[i].StepTotal
    }
  }

  return userData
} 

const userStepData = getUserdata(1503960366)

const WeeklyChart = ({date}) =>{
    const getDateInFormat = (date) => {
      return (date.getMonth() + 1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()
    }
    
    userWeeklyStepCountList = [0, 0, 0, 0]
    currDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

    i = 1

    while(i < 28) {      
      if (!(typeof userStepData[getDateInFormat(currDate).toString()] === 'undefined')) {
        userWeeklyStepCountList[Math.floor(i/7)] = userWeeklyStepCountList[Math.floor(i/7)] + userStepData[getDateInFormat(currDate).toString()]
      }

      currDate = new Date(currDate.getFullYear(),
                          currDate.getMonth(),
                          currDate.getDate() + 1)
      i = i + 1
    }

    // console.log(userWeeklyStepCountList)
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
        data: userWeeklyStepCountList,
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
  