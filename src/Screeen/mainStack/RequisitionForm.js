import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState, createRef} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SignatureCapture from 'react-native-signature-capture';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Signature from '../authStack/Signature';
import {Avatar, Button, TextInput} from 'react-native-paper';

const RequisitionForm = ({navigation}) => {
  const sign = createRef();

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    alert('Signature Captured Successfully');
    console.log(result.encoded);
    setSignatureDone(result.encoded);
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date2, setDate2] = useState('');
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  FormatDate = async data => {
    let dateTimeString =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

    hideDatePicker();
    setDate2(dateTimeString);
    console.log(date2);
    return dateTimeString; // It will look something like this 3-5-2021 16:23
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const [lab, setLab] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [samplerecived, setSamplerecived] = useState('');
  const [samplingcondition, setSamplingcondition] = useState('');
  const [samplingcollected, setSamplingcollected] = useState('');
  const [table1fcode, setTable1fcode] = useState('');
  const [table1samplelocation, setTable1samplelocation] = useState('');
  const [table1samplesource, setTable1samplesource] = useState('');
  const [table1sapmletype, setTable1sapmletype] = useState('');
  const [table1containerused, setTable1containerused] = useState('');
  const [table2fcode, setTable2fcode] = useState('');
  const [table2preservation, setTable2preservation] = useState('');
  const [table2analysedparameters, setTable2analysedparameters] = useState('');
  const [custumername, setCustumername] = useState('');
  const [samplingstaff, setSamplingstaff] = useState('');
  const [signaturedone, setSignatureDone] = useState('');
  const postData = async body => {
    if (
      lab === '' ||
      companyname === '' ||
      date2 === '' ||
      samplerecived === '' ||
      samplingcondition === '' ||
      samplingcollected === '' ||
      table1fcode === '' ||
      table1samplelocation === '' ||
      table1samplesource === '' ||
      table1sapmletype === '' ||
      table1containerused === '' ||
      table2fcode === '' ||
      table2preservation === '' ||
      table2analysedparameters === '' ||
      custumername === '' ||
      samplingstaff === '' ||
      signaturedone === ''
    ) {
      alert('fill  all fields');
    } else {
      var body = {
        lab: lab,
        company_name: companyname,
        date_of_sampling: date2,
        sample_received_in_lab: samplerecived,
        sample_condition: samplingcondition,
        sample_collected_by: samplingcollected,
        table1_feild_code: table1fcode,
        sample_locations: table1samplelocation,
        source_of_samples: table1samplesource,
        types_of_samples: table1sapmletype,
        container_used: table1containerused,
        feild_codes: table2fcode,
        preservation: table2preservation,
        parameters_to_be_analysed: table2analysedparameters,
        custumers_name: custumername,
        feild_sampling_staff: samplingstaff,
        signature: signaturedone,
      };

      try {
        const response = await fetch(
          'http://sbb.rootstechnology.in/api/requisition_survey_form',
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
      <View style={{padding: 20}}>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Lab</Text>
            <TextInput
              onChangeText={setLab}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Company Name</Text>
            <TextInput
              onChangeText={setCompanyname}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>date of Sampling</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{height: 50, width: '90%'}}
                onChangeText={setDate2}
                value={date2}
              />

              <Icon
                onPress={() => showDatePicker()}
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
            <Text style={styles.InputField}>Sample received in lab</Text>
            <TextInput
              onChangeText={setSamplerecived}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Sample Condition</Text>
            <TextInput
              onChangeText={setSamplingcondition}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Sample Collected by</Text>
            <TextInput
              onChangeText={setSamplingcollected}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={styles.Rows}>
          <View>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '700'}}>
              Table 1
            </Text>
          </View>
          <View>
            <Text style={{color: '#008000', fontWeight: '500', fontSize: 15}}>
              View records
            </Text>
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Field Code</Text>
            <TextInput
              onChangeText={setTable1fcode}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Sample Locations</Text>
            <TextInput
              onChangeText={setTable1samplelocation}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: '10%'}}>
          <Text style={styles.InputField}>Source Of Samples</Text>
          <TextInput
            onChangeText={setTable1samplesource}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Type of sample</Text>
            <TextInput
              onChangeText={setTable1sapmletype}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Container Used</Text>
            <TextInput
              onChangeText={setTable1containerused}
              style={{height: 50, width: '100%'}}
            />
          </View>
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
        <View style={styles.Rows}>
          <View>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '700'}}>
              Table 2
            </Text>
          </View>
          <View>
            <Text style={{color: '#008000', fontWeight: '500', fontSize: 15}}>
              View records
            </Text>
          </View>
        </View>
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Field Code</Text>
            <TextInput
              onChangeText={setTable2fcode}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Preservation</Text>
            <TextInput
              onChangeText={setTable2preservation}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: '10%'}}>
          <Text style={styles.InputField}>Parameters to be analysed</Text>
          <TextInput
            onChangeText={setTable2analysedparameters}
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
        <View style={styles.Rows}>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Custumer Name</Text>
            <TextInput
              onChangeText={setCustumername}
              style={{height: 50, width: '90%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.InputField}>Field/Sampling Staff</Text>
            <TextInput
              onChangeText={setSamplingstaff}
              style={{height: 50, width: '100%'}}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.InputField}>Signature</Text>
          <ScrollView style={styles.container}>
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
          </ScrollView>
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

export default RequisitionForm;

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
    height: 200,
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
