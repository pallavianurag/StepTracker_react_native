import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
 import  ProgressCircle  from 'react-native-progress-circle';

const DailyProgress = ({steps,goal}) =>{
    return(
        <View style={styles.container}>
 <ProgressCircle
            percent={[(steps/goal)*100]}
            radius={100}
            borderWidth={20}
            color="#3399FF"
            shadowColor="#80BFFF"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 30 ,color:'#0073e6' ,fontWeight:'bold'}}>
                {[steps/goal<1?Math.floor((steps/goal)*100):100]}%
                </Text>
        </ProgressCircle>

</View>
    )
}

export default DailyProgress;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
})