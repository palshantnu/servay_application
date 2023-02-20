import {View, Text, StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native';
import React, {useState,createRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {Picker} from '@react-native-picker/picker';
import Signature from '../authStack/Signature';
import SignatureCapture from 'react-native-signature-capture';

const WaterQuality = ({navigation}) => {
  const [box,setBox ] = useState('cellulose')
  const [selectBodytype, setSelectBodytype] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const Anthropogenic_activities = [
    'Industrial Discharge',
    'Agriculture Runoff',
    'Recreatinal water',
    'Solid waste Dump',
    'Sewage Discharge',
    'Bathing/Washing',
  ];
  const Water_Body_Types = [
    'Drinking water',
    'GRound water',
    'Canal',
    'STP/ETP',
    'Drain',
    'Pond',
    'Lake',
    'Stream',
  ];

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
      setSignature(result.encoded)
    };
   
    const _onDragEvent = () => {
      // This callback will be called when the user enters signature
      console.log('dragged');
    };
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date2, setDate2] = useState('');
  const [isDatePickerVisible2, setIsDatePickerVisible2] = useState(false);
  const [time, setTime] = useState('');
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

  const [fcode,setFcode] = useState('')
  const [samplinglocation,setSamplingLocation] = useState('')
  const [collectedby,setCollectedBy] = useState('')
  const [waterbodytype,setWaterBodyType] = useState('')
  const [anthropogenicactivities,setAnthropogenicActivities] = useState('')
  const [weathercondition,setWeatherCondition] = useState('')
  const [weathertemperature,setWeatherTemperature] = useState('')
  const [ph,setPh] = useState('')
  const [odor,setOdor] = useState('')
  const [colour,setColour] = useState('')
  const [flow,setFlow] = useState('')
  const [depth,setDepth] = useState('')
  const [signature,setSignature] = useState('')
  


  const postData = async body => {
    console.log(box);
    if (
      fcode === '' ||
      samplinglocation === '' ||
      collectedby === '' ||
      date2 === '' ||
      time === '' ||
      selectBodytype === ''||
      anthropogenicactivities==''||
      selectedLanguage===''  ||
      ph === '' ||
      odor === ''||
      colour===''||
      flow===''  ||
      depth===''||
      signature===''  
    ) {
      alert('fill  all fields');
    } else {
      // console.log(signature);
      var body = {
        field_code:fcode,
        Sampling_location:samplinglocation,
        collected_by:collectedby,
        morning_date:date2,
        morning_time:time,
        water_body_type:selectBodytype,
        anthropogenic_activities:anthropogenicactivities,
        weather_condition:selectedLanguage,
        cellulose_glass:box,
        water_temperature:weathertemperature,
        ph:ph,
        odor:odor,
        colour:colour,
        flow:flow,
        depth:depth,
        signature:signature
      };

      try {
        const response = await fetch(
          'http://sbb.rootstechnology.in/api/survey_water',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
          },
          
        );
        // console.log(body);

        const result = await response.json();
        console.log('result', result);
        navigation.navigate('MainScreen')
        return result;
      } catch (e) {
        console.log(e);
        return e;
      }
    }
  };






  return (
        <ScrollView style={{backgroundColor:'#fff'}} >
      <View style={{padding: 20}}>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Field Code</Text>
            <TextInput onChangeText={(txt)=>setFcode(txt)} style={{height: 50, width: '90%'}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Sampling Location</Text>
            <TextInput onChangeText={(txt)=>setSamplingLocation(txt)} style={{height: 50, width: '100%'}} />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Collected By</Text>
          <TextInput onChangeText={(txt)=>setCollectedBy(txt)} style={{height: 50, width: '100%'}} />
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Morning Date</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{height: 50, width: '90%'}}
                onPressIn={showDatePicker}
                value={date2}
              />
              <Icon
                name="calendar"
                size={20}
                color="#008000"
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginLeft: '70%',
                }}
              />
            </View>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={FormatDate}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Morning Time</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{height: 50, width: '90%'}}
                onPressIn={showDatePicker2}
                value={time}
              />
              <Icon
                name="clock-o"
                size={25}
                color="#008000"
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginLeft: '70%',
                }}
              />
            </View>

            <DateTimePickerModal
              isVisible={isDatePickerVisible2}
              mode="time"
              onConfirm={FormateTime}
              onCancel={hideDatePicker2}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={styles.InputField}>Water Body Type</Text>
          </View>
          <Picker
            selectedValue={selectBodytype}
            onValueChange={(itemValue, itemIndex) =>
              setSelectBodytype(itemValue)
            }>
                <Picker.Item label="Select Item" value="Select Item" />
            <Picker.Item label="Drinking Water" value="Drinking Water" />
            <Picker.Item label="Ground Water" value="Ground Water" />
            <Picker.Item label="Canal" value="Canal" />
            <Picker.Item label="STP/ETP" value="STP/ETP" />
            <Picker.Item label="Drain" value="Drain" />
            <Picker.Item label="Pond" value="Pond" />
            <Picker.Item label="Lake" value="Lake" />
            <Picker.Item label="River" value="River" />
            <Picker.Item label="Riffle" value="Riffle" />
            <Picker.Item label="Stream" value="Stream" />
          </Picker>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={styles.InputField}>Anthropogenic activities</Text>
          </View>

          <Picker
            selectedValue={anthropogenicactivities}
            onValueChange={(itemValue, itemIndex) =>
              setAnthropogenicActivities(itemValue)
            }>
                 <Picker.Item label="Select Item" value="Select Item" />
            <Picker.Item label="Industrial Discharge" value="Industrial Discharge" />
            <Picker.Item label="Agriculture Runoff" value="Agriculture Runoff" />
            <Picker.Item label="Solid waste Dump" value="Solid waste Dump" />
            <Picker.Item label="Sewage Discharge" value="Sewage Discharge" />
            <Picker.Item label="Bathing/washing" value="Bathing/washing" />
            <Picker.Item label="Rec waterreational" value="Recreational" />
          </Picker>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={styles.InputField}>Weather Condition</Text>
          </View>

          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
                 <Picker.Item label="Select Item" value="Select Item" />
            <Picker.Item label="Partially cloudy" value="Partially cloudy" />
            <Picker.Item label="Rainy" value="Rainy" />
            <Picker.Item label="Cloudy" value="Cloudy" />
            <Picker.Item label="Sunny" value="Sunny" />
       
            </Picker>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity
            onPress={()=>setBox("cellulose")}
              style={{
                width: 150,
                height: 50,
                backgroundColor: box === 'cellulose'? '#228b22' :'#dcdcdc',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>Cellulose</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setBox("glass")}
              style={{
                width: 150,
                height: 50,
                backgroundColor: box === 'glass'? '#228b22' :'#dcdcdc',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>Glass</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Rows}>
          <View>
            <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
              Table 
            </Text>
          </View>
          <View>
            <Text style={{color: '#008000', fontWeight: '500', fontSize: 15}}>
              View records
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Water Temperature</Text>
          <TextInput onChangeText={(txt)=>setWeatherTemperature(txt)} style={{height: 50, width: '100%'}} />
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>pH</Text>
            <TextInput onChangeText={(txt)=>setPh(txt)} style={{height: 50, width: '90%'}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Odor</Text>
            <TextInput onChangeText={(txt)=>setOdor(txt)} style={{height: 50, width: '100%'}} />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Colour</Text>
          <TextInput onChangeText={(txt)=>setColour(txt)} style={{height: 50, width: '100%'}} />
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Flow</Text>
            <TextInput onChangeText={(txt)=>setFlow(txt)} style={{height: 50, width: '90%'}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Depth</Text>
            <TextInput onChangeText={(txt)=>setDepth(txt)} style={{height: 50, width: '100%'}} />
          </View>
        </View>
        <View  style={{letterSpacing: 2,flexDirection:'row',justifyContent:'flex-end',marginTop:'10%'}}>
        <Text  style={{textAlign: 'right',marginRight:10,backgroundColor:'#008000',padding:5,borderRadius:30}}>
          
          <Icon name="plus" size={15} color="#fff" />
         
        </Text>
        <Text style={{color:"#008000",fontWeight:'600'}}>Add More</Text>
        </View>
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
  );
};

export default WaterQuality;
const styles = StyleSheet.create({
  InputField: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
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
