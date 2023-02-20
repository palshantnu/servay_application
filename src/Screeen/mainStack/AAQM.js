import {View, Text, StyleSheet, TouchableOpacity,TouchableHighlight} from 'react-native';
import React, {useState,createRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SignatureCapture from 'react-native-signature-capture';

const AAQM = ({navigation}) => {

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

  const [manometerinitial, setManometerinitial] = useState('');
  const [manometerFinal, setManometerFinal] = useState('');
  const [manometerCalculate, setManometerCalculate] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date2, setDate2] = useState('');
  const [isDatePickerVisible2, setIsDatePickerVisible2] = useState(false);
  const [date3, setDate3] = useState('');
  const [isDatePickerVisible3, setIsDatePickerVisible3] = useState(false);
  const [isDatePickerVisible4, setIsDatePickerVisible4] = useState(false);
  const [time, setTime] = useState('');
  const [time2, setTime2] = useState('');
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  FormatDate = async data => {
    let dateTimeString =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

    hideDatePicker();
    setDate2(dateTimeString);

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
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
    hideDatePicker2();

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };

  const hideDatePicker2 = () => {
    setIsDatePickerVisible2(false);
  };

  const showDatePicker3 = () => {
    setIsDatePickerVisible3(true);
  };

  FormatDate3 = async data => {
    let dateTimeString =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

    hideDatePicker();
    setDate3(dateTimeString);

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };
  const hideDatePicker3 = () => {
    setIsDatePickerVisible3(false);
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
    hideDatePicker4();

    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };

  const hideDatePicker4 = () => {
    setIsDatePickerVisible4(false);
  };

  const [fcode, setFcode] = useState('');
  const [Samplinglocation, setSamplinglocation] = useState('');
  const [instrumentid, setInstrumentid] = useState('');
  const [temperature, setTemperature] = useState('');
  const [huminidity, setHuminidity] = useState('');
  const [winddirection, setWinddirection] = useState('');
  const [initial1, setInitial1] = useState('');
  const [final1, setFinal1] = useState('');
  const [calculated1, setCalculated1] = useState('');
  const [initial2, setInitial2] = useState('');
  const [final2, setFinal2] = useState('');
  const [calculated2, setCalculated2] = useState('');
  const [initial3, setInitial3] = useState('');
  const [final3, setFinal3] = useState('');
  const [calculated3, setCalculated3] = useState('');
  const [filterpapercode4, setFilterpapercode4] = useState('');
  const [timeperiod4, setTimeperiod4] = useState('');
  const [initialweightoffilter4, setInitialweightoffilter4] = useState('');
  const [finalweightoffilter4, setFinalweightoffilter4] = useState('');
  const [filterpapercode5, setFilterpapercode5] = useState('');
  const [timeperiod5, setTimeperiod5] = useState('');
  const [initialweightoffilter5, setInitialweightoffilter5] = useState('');
  const [finalweightoffilter5, setFinalweightoffilter5] = useState('');
  const [initial6, setInitial6] = useState('');
  const [final6, setFinal6] = useState('');
  const [calculated6, setCalculated6] = useState('');
  const [initial7, setInitial7] = useState('');
  const [final7, setFinal7] = useState('');
  const [calculated7, setCalculated7] = useState('');
  const [initial8, setInitial8] = useState('');
  const [final8, setFinal8] = useState('');
  const [calculated8, setCalculated8] = useState('');
  const [absolutevol9, setAbsolutevol9] = useState('');
  const [remainingvol9, setRemainingvol9] = useState('');
  const [initial10, setInitial10] = useState('');
  const [final10, setFinal10] = useState('');
  const [calculated10, setCalculated10] = useState('');
  const [absolute_vol11, setAbsolute_vol11] = useState('');
  const [remainingvol11, setRemainingvol11] = useState('');
  const [initial12, setInitial12] = useState('');
  const [final12, setFinal12] = useState('');
  const [calculated12, setCalculated12] = useState('');
  const [absolutevol13, setAbsolutevol13] = useState('');
  const [remainingvol13, setRemainingvol13] = useState('');
  const [initial14, setInitial14] = useState('');
  const [final14, setFinal14] = useState('');
  const [calculated14, setCalculated14] = useState('');
  const [absolutevol15, setAbsolutevol15] = useState('');
  const [remainingvol15, setRemainingvol15] = useState('');
  const [initial16, setInitial16] = useState('');
  const [final16, setFinal16] = useState('');
  const [calculated16, setCalculated16] = useState('');
  const [gaseousmonitoring, setGaseousmonitoring] = useState('');
  const [monitoredby, setMonitoredby] = useState('');
  const [checkedby, setCheckedby] = useState('');
  const [signaturedone, setSignatureDone] = useState('');

const TotalCal =()=>{
  cal1 = parseInt(initial1) + parseInt(final1);
  console.log(cal1);
  setCalculated1(parseInt(initial1) + parseInt(final1));
  cal2 = parseInt(initial2) + parseInt(final2);
  console.log(cal2);
  setCalculated2(cal2);
  cal3 = parseInt(initial3) + parseInt(final3);
  console.log(cal3);
  setCalculated3(cal3);
  cal6 = parseInt(initial6) + parseInt(final6);
  console.log(cal6);
  setCalculated6(cal6);
  cal7 = parseInt(initial7) + parseInt(final7);
  console.log(cal7);
  setCalculated7(cal7);
  cal8 = parseInt(initial8) + parseInt(final8);
  console.log(cal8);
  setCalculated8(cal8);
  cal10 = parseInt(initial10) + parseInt(final10);
  console.log(cal10);
  setCalculated10(cal10);
  cal12 = parseInt(initial12) + parseInt(final12);
  console.log(cal12);
  setCalculated12(cal12);
  cal14 = parseInt(initial14) + parseInt(final14);
  console.log(cal14);
  setCalculated14(cal14);
  cal16 = parseInt(initial16) + parseInt(final16);
  console.log(cal16);
  setCalculated16(cal16);
  console.log("calculated1",calculated1);
}

  React.useEffect(() => {
   TotalCal();
  }, [
    initial1,
    final1,
    initial2,
    final2,
    initial3,
    final3,
    initial6,
    final6,
    initial7,
    final7,
    initial8,
    final8,
    initial10,
    final10,
    initial2,
    final12,
    initial14,
    final14,
    initial16,
    final16,
  ]);

  const postData = async body => {
    // console.log(selectBodytype);
    if (
      fcode === '' ||
      Samplinglocation === '' ||
      date2 === '' ||
      time === '' ||
      date3 === '' ||
      time2 === '' ||
      instrumentid === '' ||
      temperature === '' ||
      huminidity === '' ||
      winddirection === '' ||
      initial1 === '' ||
      final1 === '' ||
      calculated1 === '' ||
      initial2 === '' ||
      final2 === '' ||
      calculated2 === '' ||
      initial3 === '' ||
      final3 === '' ||
      calculated3 === '' ||
      filterpapercode4 === '' ||
      timeperiod4 === '' ||
      initialweightoffilter4 === '' ||
      finalweightoffilter4 === '' ||
      filterpapercode5 === '' ||
      timeperiod5 === '' ||
      initialweightoffilter5 === '' ||
      finalweightoffilter5 === '' ||
      initial6 === '' ||
      final6 === '' ||
      calculated6 === '' ||
      initial7 === '' ||
      final7 === '' ||
      calculated7 === '' ||
      initial8 === '' ||
      final8 === '' ||
      calculated8 === '' ||
      absolutevol9 === '' ||
      remainingvol9 === '' ||
      initial10 === '' ||
      final10 === '' ||
      calculated10 === '' ||
      absolute_vol11 === '' ||
      remainingvol11 === '' ||
      initial12 === '' ||
      final12 === '' ||
      calculated12 === '' ||
      absolutevol13 === '' ||
      remainingvol13 === '' ||
      initial14 === '' ||
      final14 === '' ||
      calculated14 === '' ||
      absolutevol15 === '' ||
      remainingvol15 === '' ||
      initial16 === '' ||
      final16 === '' ||
      calculated16 === '' ||
      gaseousmonitoring === '' ||
      monitoredby === '' ||
      checkedby === '' ||
      signaturedone===''
    ) {
      alert('fill  all fields');
    } else {
      // console.log(signature);
      var body = {
        field_code: fcode,
        Sampling_location: Samplinglocation,
        started_date: date2,
        started_time: time,
        closed_date: date3,
        closed_time: time2,
        instrument_id: instrumentid,
        temperature: temperature,
        huminidity: huminidity,
        wind_direction: winddirection,
        initial1: initial1,
        final1: final1,
        calculated1: calculated1,
        initial2: initial2,
        final2: final2,
        calculated2: calculated2,
        initial3: initial3,
        final3: final3,
        calculated3: calculated3,
        filter_paper_code4: filterpapercode4,
        time_period4: timeperiod4,
        initial_weight_of_filter4: initialweightoffilter4,
        final_weight_of_filter4: finalweightoffilter4,
        filter_paper_code5: filterpapercode5,
        time_period5: timeperiod5,
        initial_weight_of_filter5: initialweightoffilter5,
        final_weight_of_filter5: finalweightoffilter5,
        initial6: initial6,
        final6: final6,
        calculated6: calculated6,
        initial7: initial7,
        final7: final7,
        calculated7: calculated7,
        initial8: initial8,
        final8: final8,
        calculated8: calculated8,
        absolute_vol9: absolutevol9,
        remaining_vol9: remainingvol9,
        initial10: initial10,
        final10: final10,
        calculated10: calculated10,
        absolute_vol11: absolute_vol11,
        remaining_vol11: remainingvol11,
        initial12: initial12,
        final12: final12,
        calculated12: calculated12,
        absolute_vol13: absolutevol13,
        remaining_vol13: remainingvol13,
        initial14: initial14,
        final14: final14,
        calculated14: calculated14,
        absolute_vol15: absolutevol15,
        remaining_vol15: remainingvol15,
        initial16: initial16,
        final16: final16,
        calculated16: calculated16,
        gaseous_monitoring: gaseousmonitoring,
        monitored_by: monitoredby,
        checked_by: checkedby,
        signature:signaturedone
      };

      try {
        const response = await fetch(
          'http://sbb.rootstechnology.in/api/survey_AAQM',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
          },
        );
        console.log(body);

        const result = await response.json();
        console.log('result', result);
        navigation.navigate('MainScreen');
        return result;
      } catch (e) {
        console.log(e);
        return e;
      }
    }
  };

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Field Code</Text>
            <TextInput
              onChangeText={setFcode}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Sampling Location</Text>
            <TextInput
              onChangeText={setSamplinglocation}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: '10%'}}>
          <Text style={styles.InputField}>Started Date & Time</Text>
          <View style={styles.Rows}>
            <View style={{flex: 1}}>
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
        </View>
        <View style={{marginTop: '10%'}}>
          <Text style={styles.InputField}>Closed Date & Time</Text>
          <View style={styles.Rows}>
            <View style={{flex: 1}}>
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
                onCancel={hideDatePicker3}
              />
            </View>
            <View style={{flex: 1}}>
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
                onCancel={hideDatePicker4}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Instrument ID</Text>
          <TextInput
            onChangeText={setInstrumentid}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            Climatic Conditions
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Temperature</Text>
            <TextInput
              onChangeText={setTemperature}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Huminidity</Text>
            <TextInput
              onChangeText={setHuminidity}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Wind direction</Text>
          <TextInput
            onChangeText={setWinddirection}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            PM-10 Monitoring
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Filter paper code</Text>
            <TextInput
              onChangeText={setFilterpapercode4}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Time Period (in Hours)</Text>
            <TextInput
              onChangeText={setTimeperiod4}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>
              Initial weight of filter paper (mg)
            </Text>
            <TextInput
              onChangeText={setInitialweightoffilter4}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>
              Final weight of filter paper (mg)
            </Text>
            <TextInput
              onChangeText={setFinalweightoffilter4}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Manometer reading (m3/min)
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial1}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal1}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated{calculated1}</Text>
            <TextInput
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
             value={`${calculated1}`}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Time totalizer reading (min)
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              onChangeText={setInitial2}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              onChangeText={setFinal2}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
             
              value={`${calculated2}`}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Volume of passed (m3)
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial3}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal3}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
              value={`${calculated3}`}
           
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            PM-2.5 Monitoring
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Filter paper code</Text>
            <TextInput
              onChangeText={setFilterpapercode5}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Time Period (in Hours)</Text>
            <TextInput
              onChangeText={setTimeperiod5}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>
              Initial weight of filter paper (mg){' '}
            </Text>
            <TextInput
              onChangeText={setInitialweightoffilter5}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>
              final weight of filter paper (mg)
            </Text>
            <TextInput
              onChangeText={setFinalweightoffilter5}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Manometer reading (m3/min)
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial6}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal6}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
              value={`${calculated6}`}
              
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Time totalizer reading (min)
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
              onChangeText={setInitial7}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              onChangeText={setFinal7}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
             
              value={`${calculated7}`}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Volume of passed (m3)
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial8}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal8}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
              
              value={`${calculated8}`}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            Gaseous Monitoring
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.InputField}>Time Period (in Hours)</Text>
          <TextInput
            onChangeText={setGaseousmonitoring}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            SO
          </Text>
          <Text style={{fontWeight: '700', color: 'black'}}>2</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Volume of absorbent media poured in the inpingers
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Absolute Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setAbsolutevol9}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Remaining Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setRemainingvol9}
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Rotameter reading in LPM
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial10}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal10}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
            
              value={`${calculated10}`}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            NO
          </Text>
          <Text style={{fontWeight: '700', color: 'black'}}>2</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Volume of absorbent media poured in the inpingers
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Absolute Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setAbsolute_vol11}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Remaining Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setRemainingvol11}
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Rotameter reading in LPM
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial12}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal12}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
              
              value={`${calculated12}`}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            O
          </Text>
          <Text style={{fontWeight: '700', color: 'black'}}>3</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Volume of absorbent media poured in the inpingers
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Absolute Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setAbsolutevol13}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Remaining Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setRemainingvol13}
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Rotameter reading in LPM
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial14}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal14}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
         
              value={`${calculated14}`}
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            NH
          </Text>
          <Text style={{fontWeight: '700', color: 'black'}}>3</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Volume of absorbent media poured in the inpingers
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Absolute Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setAbsolutevol15}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Remaining Vol.</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setRemainingvol15}
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 17, color: '#000', fontWeight: '700'}}>
                Rotameter reading in LPM
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Initial</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setInitial16}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Final</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setFinal16}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Calculated</Text>
            <TextInput
              value={`${calculated16}`}
   
              keyboardType="numeric"
              style={{height: 50, width: '90%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Monitored BY</Text>
            <TextInput
              onChangeText={setMonitoredby}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Checked BY</Text>
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

export default AAQM;

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
