import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import WeeklyChart from './WeeklyChart';
import DailyProgress from './DailyProgress';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {

  const [steps, setSteps] = useState(0);
  const [goal,setGoal] = useState(0);
  const [date, setDate] = useState(new Date())
  const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);
  
  useEffect(() => {
    
    const interval = setInterval(() => {
      setSteps(steps + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, [steps]);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(selectedDate.toString())
    setDate(currentDate);
    setShow(false)
 };

 const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

const displayDatepicker = () => {
  showMode('date');
};


  return (
    <View style={styles.container}>

      <View>
        <View style={styles.buttonView}>
      <TouchableOpacity style={styles.button} onPress={displayDatepicker} >
        
         <Text style={styles.text}>
         {date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString()}
         </Text>
        
        </TouchableOpacity>

      {isDisplayDate &&
                  <DateTimePicker
                     value={date}
                     mode={displaymode}
                     is24Hour={false}
                     display="default"
                     onChange={changeSelectedDate}
                  />
            }
            
        </View>
        <TextInput style={styles.input} placeholderTextColor='#0073e6'type='number' keyboardType="numeric" value ={goal} placeholder="Set Daily Goal"
 onChangeText={newText => setGoal(newText)} />
      </View>
      <Text style={styles.goal}>Daily Goal : {goal}</Text> 
      <View style={styles.progressBarContainer}>
      
<DailyProgress steps ={steps} goal={goal} />
      
      </View>
      <View style = {{top : 100, alignContent:'center', justifyContent:'center'}}>
        <Text style = {styles.steps}>{steps} steps</Text>
        <Text></Text>
        {steps>=goal?<Text style={{color:'black',fontSize:25, color:'#3499FF', fontWeight:'300' }}>Yay! daily goal reached</Text>:null}
      </View>

      <WeeklyChart/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7F3FF',
  },
  progressBarContainer: {
    height: 40,
    width: 200,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonView:{
    bottom: 110 ,
    right : 100,
    borderRadius: 20
  },
  button:{
    backgroundColor:'white',
    fontSize:15,
    height:40,
    textAlign:'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  text:{
    color:'#0073e6',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold'
  },
  input:{
    height : 40,
    width : 120,
    bottom:150 ,
    left : 100,
    borderRadius:10,
    backgroundColor:'white',
    color:'#0073e6',
    fontSize:15,
textAlign:'center',
fontWeight:'bold'
  },
  steps: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#0073e6',
    textAlign:'center'
  },
  goal: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#0073e6',
    justifyContent: 'center',
    alignItems:'center',
    bottom:100
  },
  
});
