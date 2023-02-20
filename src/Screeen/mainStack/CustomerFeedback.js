import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import React, {useState,createRef} from 'react';
import {TextInput} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import Signature from '../authStack/Signature';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignatureCapture from 'react-native-signature-capture';

const CustomerFeedback = ({navigation}) => {
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
 
  const [checked, setChecked] = React.useState('5');
  const [checked2, setChecked2] = React.useState('5');
  const [checked3, setChecked3] = React.useState('5');
  const [totalchecked, setTotalChecked] = React.useState('5');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date2, setDate2] = useState('');
  const [custumername,setCustumername] = useState('')
  const [address,setAddress] = useState('')
  const [telephone,setTelephone] = useState('')
const [feedbackername,setFeedbackername] = useState('')
const [signaturedone, setSignatureDone] = useState('');


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



  const postData = async body => {
    if (
      custumername === '' ||
      address === '' ||
      date2 === '' ||
      telephone === '' ||
      feedbackername === '' ||
      signaturedone === ''
    ) {
      alert('fill  all fields');
    } else {
      var body = {
        customer_name:custumername,
        address:address,
        telephone_no:telephone,
        quality_of_testing:checked,
        timely_dispatch_of_reports:checked2,
        handling_of_complaint:checked3,
        feedbacker_name:feedbackername,
        date:date2,
        signature:signaturedone,
        Total_SCORE:totalchecked
      };

      try {
        const response = await fetch(
          'http://sbb.rootstechnology.in/api/customer_feedback',
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

const TotalChecked =()=>{

  console.log(checked);
  var A= parseInt(checked)
  var B= parseInt(checked2)
  var C= parseInt(checked3)

  var D = A+B+C
  console.log(D/3);
  var X =D/3
  if (X<=5 && X>4) {
    setTotalChecked("Excellent")
  }else if(X<=4 && X>3) {
    setTotalChecked("Very Good")
  }else if(X<=3 && X>2) {
    setTotalChecked("Good")
  }else if(X<=2 && X>1) {
    setTotalChecked("Average")
  }else if(X<=1) {
    setTotalChecked("poor")
  }
 
}

React.useEffect(() => {
TotalChecked()
}, [checked,checked2,checked3])


  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Text style={styles.InputField}>Custumer Name</Text>
        <TextInput onChangeText={setCustumername} style={{height: 50, width: '100%'}} />
        <View style={{marginTop: 10}}>
          <Text style={styles.InputField}>Address</Text>
          <TextInput onChangeText={setAddress} style={{height: 50, width: '100%'}} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.InputField}>Telephone No.</Text>
          <TextInput onChangeText={setTelephone} style={{height: 50, width: '100%'}} />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 15, color: '#000'}}>
            Please rate the performence of our organization on the following
            poor point scale :
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: 'bold'}}>
            Quality of Testing
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <RadioButton
              value="5"
              status={checked === '5' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('5')}
            />
            <Text style={styles.Radio}>Excellent</Text>
          </View>
          <View>
            <RadioButton
              value="4"
              status={checked === '4' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('4')}
            />
            <Text style={styles.Radio}>Very Good</Text>
          </View>
          <View>
            <RadioButton
              value="3"
              status={checked === '3' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('3')}
            />
            <Text style={styles.Radio}>Good</Text>
          </View>
          <View>
            <RadioButton
              value="2"
              status={checked === '2' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('2')}
            />
            <Text style={styles.Radio}>Average</Text>
          </View>
          <View>
            <RadioButton
              value="1"
              status={checked === '1' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('1')}
            />
            <Text style={styles.Radio}>poor</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: 'bold'}}>
            Timely dispatch of reports
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <RadioButton
              value="5"
              status={checked2 === '5' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('5')}
            />
            <Text style={styles.Radio}>Excellent</Text>
          </View>
          <View>
            <RadioButton
              value="4"
              status={checked2 === '4' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('4')}
            />
            <Text style={styles.Radio}>Very Good</Text>
          </View>
          <View>
            <RadioButton
              value="3"
              status={checked2 === '3' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('3')}
            />
            <Text style={styles.Radio}>Good</Text>
          </View>
          <View>
            <RadioButton
              value="2"
              status={checked2 === '2' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('2')}
            />
            <Text style={styles.Radio}>Average</Text>
          </View>
          <View>
            <RadioButton
              value="1"
              status={checked2 === '1' ? 'checked' : 'unchecked'}
              onPress={() => setChecked2('1')}
            />
            <Text style={styles.Radio}>poor</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: 'bold'}}>
            Handling of Complaint
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <RadioButton
              value="5"
              status={checked3 === '5' ? 'checked' : 'unchecked'}
              onPress={() => setChecked3('5')}
            />
            <Text style={styles.Radio}>Excellent</Text>
          </View>
          <View>
            <RadioButton
              value="4"
              status={checked3 === '4' ? 'checked' : 'unchecked'}
              onPress={() => setChecked3('4')}
            />
            <Text style={styles.Radio}>Very Good</Text>
          </View>
          <View>
            <RadioButton
              value="3"
              status={checked3 === '3' ? 'checked' : 'unchecked'}
              onPress={() => setChecked3('3')}
            />
            <Text style={styles.Radio}>Good</Text>
          </View>
          <View>
            <RadioButton
              value="2"
              status={checked3 === '2' ? 'checked' : 'unchecked'}
              onPress={() => setChecked3('2')}
            />
            <Text style={styles.Radio}>Average</Text>
          </View>
          <View>
            <RadioButton
              value="1"
              status={checked3 === '1' ? 'checked' : 'unchecked'}
              onPress={() => setChecked3('1')}
            />
            <Text style={styles.Radio}>poor</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 17, color: '#000', fontWeight: 'bold'}}>
                Total Score :  
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 17, color: '#000'}}>
              
               {totalchecked}
              </Text>
            </View>
          </View>
          <View style={styles.Rows}>
            <View style={{flex: 1}}>
              <Text style={styles.InputField}>Feeddbacker Name </Text>
              <TextInput onChangeText={setFeedbackername} style={{height: 50, width: '90%'}} />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.InputField}>Date</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{height: 50, width: '90%'}}
                  
                  value={date2}
                />
                <Icon
                 onPress={()=>showDatePicker()} 
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
          onPress={() =>postData() }>
          <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
            Submit
          </Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
};

export default CustomerFeedback;

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
