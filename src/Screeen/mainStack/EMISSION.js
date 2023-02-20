import {View, Text, StyleSheet, TouchableOpacity, Alert,TouchableHighlight} from 'react-native';
import React, {useState,createRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SignatureCapture from 'react-native-signature-capture';

const EMISSION = ({navigation}) => {
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
  const [box, setBox] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date2, setDate2] = useState('');
  const [isDatePickerVisible2, setIsDatePickerVisible2] = useState(false);
  const [time, setTime] = useState('');
  const [date3, setDate3] = useState('');
  const [isDatePickerVisible3, setIsDatePickerVisible3] = useState(false);
  const [isDatePickerVisible4, setIsDatePickerVisible4] = useState(false);
  const [time2, setTime2] = useState('');
const [signaturedone, setSignatureDone] = useState('');

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  FormatDate = async data => {
    let dateTimeString =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

    monitoring_platformPicker();
    setDate2(dateTimeString);

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };
  const monitoring_platformPicker = () => {
    setIsDatePickerVisible(false);
  };

  const showDatePicker3 = () => {
    setIsDatePickerVisible3(true);
  };

  FormatDate3 = async data => {
    let dateTimeString =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

    monitoring_platformPicker3();
    setDate3(dateTimeString);

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };
  const monitoring_platformPicker3 = () => {
    setIsDatePickerVisible3(false);
  };

  const showDatePicker2 = () => {
    setIsDatePickerVisible2(true);
  };

  FormateTime = async data => {
    console.log(
      'time',
      new Date(data).getHours() + ':' + new Date(data).getMinutes(),
    );

    if (new Date(data).getHours() > 11) {
      setTime(
        new Date(data).getHours() -
          12 +
          ':' +
          new Date(data).getMinutes() +
          ' PM',
      );
      if (new Date(data).getMinutes() < 10) {
        setTime(
          new Date(data).getHours() -
            12 +
            ':' +
            '0' +
            new Date(data).getMinutes() +
            ' PM',
        );
      }
    } else {
      setTime(
        new Date(data).getHours() + ':' + new Date(data).getMinutes() + ' AM',
      );
      if (new Date(data).getMinutes() < 10) {
        setTime(
          new Date(data).getHours() +
            ':' +
            '0' +
            new Date(data).getMinutes() +
            ' AM',
        );
      }
    }
    monitoring_platformPicker2();

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };

  const monitoring_platformPicker2 = () => {
    setIsDatePickerVisible2(false);
  };

  const showDatePicker4 = () => {
    setIsDatePickerVisible4(true);
  };

  FormateTime4 = async data => {
    console.log(
      'time',
      new Date(data).getHours() + ':' + new Date(data).getMinutes(),
    );

    if (new Date(data).getHours() > 11) {
      setTime2(
        new Date(data).getHours() -
          12 +
          ':' +
          new Date(data).getMinutes() +
          ' PM',
      );
      if (new Date(data).getMinutes() < 10) {
        setTime2(
          new Date(data).getHours() -
            12 +
            ':' +
            '0' +
            new Date(data).getMinutes() +
            ' PM',
        );
      }
    } else {
      setTime2(
        new Date(data).getHours() + ':' + new Date(data).getMinutes() + ' AM',
      );
      if (new Date(data).getMinutes() < 10) {
        setTime2(
          new Date(data).getHours() +
            ':' +
            '0' +
            new Date(data).getMinutes() +
            ' AM',
        );
      }
    }
    monitoring_platformPicker4();

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };

  const monitoring_platformPicker4 = () => {
    setIsDatePickerVisible4(false);
  };

  const [fieldcode, setFieldcode] = useState('');
  const [thimblecode, setThimblecode] = useState('');
  const [monitoringpoint, setMonitoringpoint] = useState('');
  const [stackkitid, setStackkitid] = useState('');
  const [thimbleno, setThimbleno] = useState('');
  const [initial, setInitial] = useState('');
  const [final, setFinal] = useState('');
  const [typeofstack, setTypeofstack] = useState('');
  const [typeoffuel, setTypeoffuel] = useState('');
  const [materialofconstruction, setMaterialofconstruction] = useState('');
  const [stacktop, setStacktop] = useState('');
  const [stackattechedto, setStackattechedto] = useState('');
  const [capacity, setCapacity] = useState('');
  const [monitoringplatform, setMonitoringplatform] = useState('');
  const [amperegenerated, setAmperegenerated] = useState('');
  const [insidediameterofstack, setInsidediameterofstack] = useState('');
  const [crosssectional, setCrosssectional] = useState('');
  const [ambient1st, setAmbient1st] = useState('');
  const [ambient2nd, setAmbient2nd] = useState('');
  const [ambient3rd, setAmbient3rd] = useState('');
  const [ambient4th, setAmbient4th] = useState('');
  const [ambient5th, setAmbient5th] = useState('');
  const [barometricpressure, setBarometricpressure] = useState('');
  const [ambient6, setAmbient6] = useState('');
  const [ambient7, setAmbient7] = useState('');
  const [ambient8, setAmbient8] = useState('');
  const [ambient9, setAmbient9] = useState('');
  const [ambient10, setAmbient10] = useState('');
  const [absolutestackpressure, setAbsolutestackpressure] = useState('');
  const [notraversasper, setNotraversasper] = useState('');
  const [pilottubeconstant, setPilottubeconstant] = useState( );
  const [stackgasdeferntial, setStackgasdeferntial] = useState('');
  const [amrithismeticmeanofall, setAmrithismeticmeanofall] = useState('');
  const [monitoringdoneby, setMonitoringdoneby] = useState('');
  const [checkedby, setCheckedby] = useState('');
  const [difference, setDifference] = useState('');
  const [angtemp, setAvgTemp] = useState('');
  const [totalavg, setTotalavg] = useState([]);
  const [angtemp2, setAvgTemp2] = useState('');
  const [totalavg2, setTotalavg2] = useState([]);
  const [root, setRoot] = useState('');
  const [root2, setRoot2] = useState('');
  const [root3, setRoot3] = useState('');
  const [finalroot, setFinalroot] = useState('');
  const [flowrate, setFlowRate] = useState('');
  const [totalgas, setTotalGas] = useState('');
  const [volgas, setVolGas] = useState('');
  
console.log("jhe",pilottubeconstant);
 
   const Tavg =()=>{
    
   }

React.useEffect(() => {
  setTotalavg([
    parseInt(ambient1st),
    parseInt(ambient2nd),
    parseInt(ambient3rd),
    parseInt(ambient4th),
    parseInt(ambient5th),
  ])
  simpleArraySum();

  console.log("totalavg",totalavg)
  simpleArraySum();
}, [ambient1st,ambient2nd,ambient3rd,ambient4th,ambient5th,barometricpressure])

React.useEffect(() => {
  setTotalavg2([
    parseInt(ambient6),
    parseInt(ambient7),
    parseInt(ambient8),
    parseInt(ambient9),
    parseInt(ambient10),
  ])
  simpleArraySum2();

  console.log("totalavg",totalavg2)
  simpleArraySum2();
}, [ambient6,ambient7,ambient8,ambient9,ambient10,absolutestackpressure])

const FindSquareRoot=()=>{
    console.log("root",root);
    console.log("root2",root2);
    console.log("root3",root3);
  // var A = root ; 
var X= root*root3
var Y = root2*28
// console.log("X",Y);
  var B = Math.sqrt(X/Y)
  console.log(B*parseFloat(pilottubeconstant)*34.97);
setFinalroot(B*parseFloat(pilottubeconstant)*34.97)


// console.log("final root",finalroot.toFixed(3));
//   var B = Math.sqrt(root/root2*root3/28)
//   console.log("b",B);
// var C = 0.9021*34.97*B
  // Alert.alert("SquareRoot = " + B.toString());
// console.log("SquareRoot = " + C.toString());
}
React.useEffect(()=>{
  setRoot(parseFloat(amrithismeticmeanofall))
  setRoot2(parseFloat(absolutestackpressure))
  setRoot3(parseFloat(angtemp2 + 273))
  console.log("ehsa",amrithismeticmeanofall);
  FindSquareRoot()

},[amrithismeticmeanofall,monitoringdoneby])


const FlowRate = () =>{
  const A = finalroot*0.0000712*(parseFloat(angtemp)+273)/(parseFloat(angtemp2)+273)
const B =A*1000*60
  console.log("flowrate=>",B);
  setFlowRate(B)
  
}
const TotalG =()=>{
  setTotalGas(flowrate?flowrate.toFixed(1)*45:null)
}
const VolGas =()=>{
  const A = parseFloat(totalgas)*298/(parseFloat(angtemp2)+273)*parseFloat(absolutestackpressure)/760*1.04/1
  console.log("volgas=>",A);
  setVolGas(A)
}
React.useEffect(() => {
 FlowRate()
 TotalG()
 VolGas()
}, [monitoringdoneby])

  React.useEffect(() => {
    setDifference(initial - final);

    console.log(difference);
    
  }, [difference, initial, final]);
  function  simpleArraySum () {
     const grades = totalavg;
  console.log("grade",grades);
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
      if (typeof grades[i] == `number`) sum += grades[i];
    }
    console.log(sum);
    const avg = sum / grades.length;
    setAvgTemp(avg);
    console.log("avg",avg);
    return avg;
  }
  function  simpleArraySum2 () {
    const grades = totalavg2;
 console.log("grade2",grades);
   var sum = 0;
   for (var i = 0; i < grades.length; i++) {
     if (typeof grades[i] == `number`) sum += grades[i];
   }
   console.log(sum);
   const avg = sum / grades.length;
   setAvgTemp2(avg);
   console.log("avg",avg);
   return avg;
 }
  const postData = async body => {
    if (
      fieldcode === '' ||
      box === '' ||
      thimblecode === '' ||
      monitoringpoint === '' ||
      date2 === '' ||
      time === '' ||
      date3 === '' ||
      time2 === '' ||
      stackkitid === '' ||
      thimbleno === '' ||
      initial === '' ||
      final === '' ||
      difference === '' ||
      typeofstack === '' ||
      typeoffuel === '' ||
      materialofconstruction === '' ||
      stacktop === '' ||
      stackattechedto === '' ||
      capacity === '' ||
      monitoringplatform === '' ||
      amperegenerated === '' ||
      insidediameterofstack === '' ||
      crosssectional === '' ||
      ambient1st === '' ||
      ambient2nd === '' ||
      ambient3rd === '' ||
      ambient4th === '' ||
      ambient5th === '' ||
      barometricpressure === '' ||
      ambient6 === '' ||
      ambient7 === '' ||
      ambient8 === '' ||
      ambient9 === '' ||
      ambient10 === '' ||
      absolutestackpressure === '' ||
      notraversasper === '' ||
      pilottubeconstant === '' ||
      stackgasdeferntial === '' ||
      amrithismeticmeanofall === '' ||
      monitoringdoneby === '' ||
      checkedby === '' ||
      signaturedone===''
    ) {
      alert('fill  all fields');
    } else {
      var body = {
        field_code: fieldcode,
        thimble_type: box,
        thimble_code: thimblecode,
        monitoring_point: monitoringpoint,
        started_date: date2,
        started_time: time,
        closed_date: date3,
        closed_time: time2,
        stack_kit_id: stackkitid,
        Thimble_No: thimbleno,
        Initial_Weight: initial,
        Final_Weight: final,
        Difference: difference,
        type_of_stack: typeofstack,
        type_of_fuel: typeoffuel,
        material_of_construction: materialofconstruction,
        stack_top: stacktop,
        stack_atteched_to: stackattechedto,
        capacity: capacity,
        monitoring_platform: monitoringplatform,
        ampere_generated: amperegenerated,
        inside_diameter_of_stack: insidediameterofstack,
        cross_sectional: crosssectional,
        ambient1st: ambient1st,
        ambient2nd: ambient2nd,
        ambient3rd: ambient3rd,
        ambient4th: ambient4th,
        ambient5th: ambient5th,
        barometric_pressure: barometricpressure,
        ambient6: ambient6,
        ambient7: ambient7,
        ambient8: ambient8,
        ambient9: ambient9,
        ambient10: ambient10,
        absolute_stack_pressure: absolutestackpressure,
        no_travers_as_per: notraversasper,
        pilot_tube_constant: pilottubeconstant,
        stack_gas_deferntial: stackgasdeferntial,
        amrithismetic_mean_of_all: amrithismeticmeanofall,
        monitoring_done_by: monitoringdoneby,
        checked_by: checkedby,
        signature:signaturedone
      };


      

      try {
        const response = await fetch(
          'http://sbb.rootstechnology.in/api/survey_Emission',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
          },
        );

        const result = await response.json();
        console.log('result', result);
        navigation.navigate('MainScreen');
        return result;
      } catch (e) {
        return e;
      }
    }
  };

  // for (let index = 0; index < grades.length; index++) {
  //  const  element = grades[index]+0;
  //   console.log(element);
  // }

  // console.log(simpleArraySum([1, 2, 3, 4]))



  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Field code</Text>
          <TextInput
            onChangeText={setFieldcode}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Thimble type</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={() => setBox('cel')}
              style={{
                width: 150,
                height: 50,
                backgroundColor: box === 'cel' ? '#228b22' : '#dcdcdc',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>Cellulose</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setBox('glass')}
              style={{
                width: 150,
                height: 50,
                backgroundColor: box === 'glass' ? '#228b22' : '#dcdcdc',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>Glass</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Thimble Code</Text>
          <TextInput
            onChangeText={setThimblecode}
            style={{height: 50, width: '100%'}}
          />
        </View> 
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Monitoring Point</Text>
          <TextInput
            onChangeText={setMonitoringpoint}
            style={{height: 50, width: '100%'}}
          />
        </View>

        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Started Date</Text>
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
              onCancel={monitoring_platformPicker}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Started Time</Text>
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
              onCancel={monitoring_platformPicker2}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Close Date</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{height: 50, width: '90%'}}
                onPressIn={showDatePicker3}
                value={date3}
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
              isVisible={isDatePickerVisible3}
              mode="date"
              onConfirm={FormatDate3}
              onCancel={monitoring_platformPicker3}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Close Time</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{height: 50, width: '90%'}}
                onPressIn={showDatePicker4}
                value={time2}
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
              isVisible={isDatePickerVisible4}
              mode="time"
              onConfirm={FormateTime4}
              onCancel={monitoring_platformPicker4}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Stack kit ID</Text>
          <TextInput
            onChangeText={setStackkitid}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Thimble No</Text>
          <TextInput
            onChangeText={setThimbleno}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial weight (g)</Text>
            <TextInput
              onChangeText={setInitial}
              style={{height: 50, width: '90%'}}
              keyboardType={'numeric'}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final weight (g)</Text>
            <TextInput
              onChangeText={setFinal}
              style={{height: 50, width: '100%'}}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
              Difference
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
              {difference}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            PRIMARY DATA OF STACK
          </Text>
        </View>

        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Type of stack</Text>
            <TextInput
              onChangeText={setTypeofstack}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Type of fuel</Text>
            <TextInput
              onChangeText={setTypeoffuel}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Material of Construction</Text>
            <TextInput
              onChangeText={setMaterialofconstruction}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Stack Top</Text>
            <TextInput
              onChangeText={setStacktop}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Stack Atteched to</Text>
            <TextInput
              onChangeText={setStackattechedto}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Capacity</Text>
            <TextInput
              onChangeText={setCapacity}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>
            Monitoring Platform height from ground level
          </Text>
          <TextInput
            onChangeText={setMonitoringplatform}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Ampere generated ( only for DG)</Text>
          <TextInput
            onChangeText={setAmperegenerated}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>
            Inside Diameter of stack at sampling point
          </Text>
          <TextInput
            onChangeText={setInsidediameterofstack}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Cross Sectional Area of stack</Text>
          <TextInput
            onChangeText={setCrosssectional}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            SECONDARY DATA OF STACK
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Ambient Temperature C°</Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient1st}
              style={{height: 50, width: '90%'}}
              keyboardType={'numeric'}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient2nd}
              style={{height: 50, width: '90%'}}
              keyboardType={'numeric'}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient3rd}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient4th}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient5th}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.InputField}>Average Temperature</Text>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            {angtemp} K
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>
            Barometric pressure or Atmospheric pressure
          </Text>
          <TextInput
            onChangeText={setBarometricpressure}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Flue Gas Temperature C°</Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient6}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient7}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient8}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient9}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              onChangeText={setAmbient10}
              keyboardType={'numeric'}
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.InputField}>Average Temperature</Text>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            {angtemp2} K
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Absolute stack pressure</Text>
          <TextInput
            onChangeText={setAbsolutestackpressure}
            style={{height: 50, width: '100%'}}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>No travers as per dia</Text>
          <TextInput
            onChangeText={setNotraversasper}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>
            Pilot tube constant of type 'S' pilot
          </Text>
          <TextInput
            onChangeText={setPilottubeconstant}
            style={{height: 50, width: '100%'}}
            keyboardType={'numeric'}
          />
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
          <Text style={styles.InputField}>
            Stack gas deferntial pressure at different traverse point ( m/s )
          </Text>
          <TextInput
            onChangeText={setStackgasdeferntial}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View
          style={{
            letterSpacing: 2,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: '10%',
          }}>
          <Text
            style={{
              textAlign: 'right',
              marginRight: 10,
              backgroundColor: '#008000',
              padding: 5,
              borderRadius: 30,
            }}>
            <Icon name="plus" size={15} color="#fff" />
          </Text>
          <Text style={{color: '#008000', fontWeight: '600'}}>Add More</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>
            Amrithismetic mean of all the deferential pressure values
          </Text>
          <TextInput
            onChangeText={setAmrithismeticmeanofall}
            style={{height: 50, width: '100%'}}
            keyboardType={'numeric'}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.InputField}>Gas valocity in stack</Text>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            {finalroot?finalroot.toFixed(3):null} m/s
          </Text>
        </View>
        {/* <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.InputField}>
            Flue gas flow rate at stack Conditions
          </Text>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            0 mᶟ/h
          </Text>
        </View> */}
        {/* <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.InputField}>
            Flue gas flow rate at normal Conditions
          </Text>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            0 mᶟ/h
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            {flowrate?flowrate.toFixed(1):null} m3/s
          </Text>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            {totalgas} m3
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.InputField}>Flow rate</Text>
          <Text style={styles.InputField}>Total gas sample</Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>
              Volume of gas sampled at nornalize condition
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              {volgas? volgas.toFixed(1):null } K
            </Text>
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Monitoring done By:</Text>
            <TextInput
              onChangeText={setMonitoringdoneby}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Checked By :</Text>
            <TextInput
              onChangeText={setCheckedby}
              style={{height: 50, width: '100%'}}
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
  );
};

export default EMISSION;

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
