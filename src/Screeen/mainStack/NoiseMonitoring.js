import { View, Text ,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native'
import React,{useState,createRef} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignatureCapture from 'react-native-signature-capture';

const NoiseMonitoring = ({navigation}) => {
  const sign = createRef();
 
  const saveSign = () => {
    sign.current.saveImage();
  };
 
  const resetSign = () => {
    sign.current.resetImage();
  };
 
  const _onSaveEvent = (result) => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    alert('Signature Captured Successfully');
    console.log(result.encoded);
    setSignatureDone(result.encoded)
  };
 
  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [date2, setDate2] = useState('');
    const [isDatePickerVisible2, setIsDatePickerVisible2] = useState(false);
    const [time, setTime] = useState('');
    const [totaltime, setTotalTime] = useState('');
    const [fieldcode,setFieldcode]=useState('')
    const [locationofmonitoring,setLocationofmonitoring]=useState('')
    const [instrumentcode,setInstrumentcode]=useState('')
    const [reading,setMReading]=useState('')
    const [sourceofcode,setSourceofcode] = useState('')
    const [monitoredby,setMonitoredby]=useState('')
    const [signaturedone, setSignatureDone] = useState('');



  


    const showDatePicker = () => {
      setIsDatePickerVisible(true);
    };
  
    FormatDate = async data => {
      let dateTimeString =
        data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
  
      hideDatePicker();
      setDate2(dateTimeString);
  console.log("dateTimeString",dateTimeString);
      return dateTimeString; // It will look something like this 3-5-2021 16:23
    };
    const hideDatePicker = () => {
      setIsDatePickerVisible(false);
    };

    const showDatePicker2 = () => {
      setIsDatePickerVisible2(true);
    };
  
    FormateTime = async data => {
      console.log("time",new Date(data).getHours()+":"+new Date(data).getMinutes());

      if (new Date(data).getHours()>11) {
        setTime(new Date(data).getHours()-12+":"+new Date(data).getMinutes()+" PM")
        if (new Date(data).getMinutes()<10) {
          setTime(new Date(data).getHours()-12+":"+"0"+ new Date(data).getMinutes()+" PM")
        }
      }else{

   setTime(new Date(data).getHours()+":"+new Date(data).getMinutes()+" AM")
   if (new Date(data).getMinutes()<10) {
    setTime(new Date(data).getHours()+":"+"0"+ new Date(data).getMinutes()+" AM")
  }}
      hideDatePicker2();
      
console.log("settime",time);
      return dateTimeString; // It will look something like this 3-5-2021 16:23
    };
  
    const hideDatePicker2 = () => {
      setIsDatePickerVisible2(false);
    };

    const postData = async body => {
      console.log("jhwbd",locationofmonitoring);
      if (
        fieldcode === '' ||
        locationofmonitoring === '' ||
        instrumentcode === '' ||
        sourceofcode === '' ||
        time === '' ||
        reading === ''||
        monitoredby==''||
        date2===''  ||
        signaturedone===''  
      ) {
        alert('fill  all fields');
      } else {
        var body = {
          field_code:fieldcode,
          location_of_monitoring:locationofmonitoring,
          instrument_code:instrumentcode,
          source_of_code:sourceofcode,
          morning_time:time,
          reading:reading,
          monitored_by:monitoredby,
          morning_date:date2,
          signature:signaturedone
        };
  
        try {
          const response = await fetch(
            'http://sbb.rootstechnology.in/api/survey_noise',
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json;charset=utf-8'},
              body: JSON.stringify(body),
            },
          );
  
          const result = await response.json();
          console.log('result', result);
          navigation.navigate('MainScreen')
          return result;
        } catch (e) {
          return e;
        }
      }
    };
  return (
    <ScrollView>
        <View style={{padding:20}}>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Field Code</Text>
            <TextInput onChangeText={setFieldcode} style={{height: 50, width: '90%'}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Location of Monitoring</Text>
            <TextInput onChangeText={setLocationofmonitoring} style={{height: 50, width: '100%'}} />
          </View>
        </View>
        <View style={{marginTop:20}}>
            <Text style={styles.InputField}>Instrument Code</Text>
            <TextInput onChangeText={setInstrumentcode} style={{height: 50, width: '100%'}} />
          </View>
          <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Source Of Noise</Text>
            <TextInput onChangeText={setSourceofcode} style={{height: 50, width: '90%'}} />
          </View>
          <View style={{flex: 1}}>
          <Text style={styles.InputField}>Morning Time</Text>
          <View style={{flexDirection:'row'}}>
            <TextInput
              style={{height: 50, width: '90%'}}
             
              value={time}
            />
            <Icon  onPress={()=>showDatePicker2()} name="clock-o" size={25} color="#008000" style={{position:'absolute',alignSelf:'center',marginLeft:'70%'}} />
            </View>
            
            <DateTimePickerModal
              isVisible={isDatePickerVisible2}
              mode="time"
              onConfirm={FormateTime}
              onCancel={hideDatePicker2}
            />
          </View>
        </View> 
        <View style={{marginTop:20}}>
            <Text style={styles.InputField}>Reading</Text>
            <TextInput onChangeText={setMReading} style={{height: 50, width: '100%'}} />
          </View>
          <View  style={{letterSpacing: 2,flexDirection:'row',justifyContent:'flex-end',marginTop:'10%'}}>
        <Text  style={{textAlign: 'right',marginRight:10,backgroundColor:'#008000',padding:5,borderRadius:30}}>
          
          <Icon name="plus" size={15} color="#fff" />
         
        </Text>
        <Text style={{color:"#008000",fontWeight:'600'}}>Add More</Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Monitored By</Text>
            <TextInput onChangeText={setMonitoredby} style={{height: 50, width: '90%'}} />
          </View>
          <View style={{flex: 1}}>
          <Text style={styles.InputField}>Morning Date</Text>
          <View style={{flexDirection:'row'}}>
            <TextInput
              style={{height: 50, width: '90%'}}
              onPressIn={showDatePicker}
              value={date2}
            />
            <Icon name="calendar" size={20} color="#008000" style={{position:'absolute',alignSelf:'center',marginLeft:'70%'}} />
            </View>
            
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={FormatDate}
              onCancel={hideDatePicker}
            />
          </View>
        </View> 
        <View style={{marginTop: 20}}>
        <Text style={styles.InputField}>Signature</Text>
        <View style={styles.container}>
        
        <SignatureCapture
          style={styles.signature}
          ref={sign}
          onSaveEvent={_onSaveEvent}
          onDragEvent={_onDragEvent}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              saveSign();
            }}>
            <Text>Save</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              resetSign();
            }}>
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: '#008000',
            padding: 15,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 5,
          }}
          onPress={() => postData()}>
          <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
            Submit
          </Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default NoiseMonitoring

const styles = StyleSheet.create({
    InputField: {
      fontSize: 13,
      color: '#000',
      fontWeight: '500',
      padding: 2,
    },
    Radio: {
      fontSize: 15,
      color: '#000',
      fontWeight: '400',
      padding: 2,
    },
    Rows: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '10%',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    signature: {
      flex: 1,
      borderColor: '#000033',
      borderWidth: 1,
      height:200
    },
    buttonStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#eeeeee',
      margin: 10,
    },
  });
  