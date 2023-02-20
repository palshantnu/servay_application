import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  ToastAndroid,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {YourComponent} from '../authStack/Popupmenu';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import MapView, {PROVIDER_GOOGLE, Marker,Polygon,Polyline} from 'react-native-maps';
import {useRef} from 'react';
import Geolocation from 'react-native-geolocation-service';
const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const MainScreen = ({navigation}) => {


  const [region, setRegion] = React.useState({
    latitude: 26.2417259,
    longitude: 78.1923,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  console.log(region);
  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        };
        setRegion(region);
        console.log('region=', region);
        // mapRef.current.animateToRegion(region, 3 * 1000);
        // mapRef.current.animateToRegion(region, 2 * 1000);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 200000, maximumAge: 5000},
    );
  };
  useEffect(() => {
    getLocation();
  }, []);
  const [image, setImage] = React.useState('');
  const FormSub = async (id) => {
    console.log(id);
  

    if (image === '') {
      Alert.alert('Select Image');
    } else {
      var body = {
        img: image,
        region: region,

      };

      try {
        const response = await fetch(
          'http://sbb.rootstechnology.in/api/survey',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
          },
        );

        const result = await response.json();

        console.log('data', result);
if (result.Sucess) {
  navigation.navigate(id)
}else{
  console.log("error");
}
        return result;
      } catch (e) {
        console.log('>>>>>>', e);
        return e;
      }
    }
  };

  const OpenCamra =async (id) => {
   await ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then(image => {
      console.log(image.data);
      setImage(image.data);
      FormSub(id)
    });
  };

  const SelectImage = async(id) => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then(image => {
      console.log(image.data);
      setImage(image.data);
      FormSub(id)
    });
  };
  const selectPic = (id) => {
    Alert.alert(
      'Select Profile Picture from',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Camera',
          onPress: () => OpenCamra(id),
        },
        {
          text: 'Gallery',
          onPress: () => SelectImage(id),
        },
      ],
      {
        cancelable: true,
      },
    );
  };
const OnClickLocation = async ()=>{
  await  OpenCamra();
  if (image === '') {
    Alert.alert('Select Image');
  } else {
    var body = {
      img: image,
      region: region,

    };

    try {
      const response = await fetch(
        'http://sbb.rootstechnology.in/api/survey',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(body),
        },
      );

      const result = await response.json();
      if (result.Sucess) {
        // Alert.alert("success")
        ToastAndroid.show('successfully submitted', ToastAndroid.SHORT);
      }else{
        Alert.alert("error");
      }
      console.log('data', result);
      
      return result;
    } catch (e) {
      console.log('>>>>>>', e);
      return e;
    }
  }
}

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text
          style={{
            flex: 3,
            fontSize: 25,
            fontWeight: '700',
            color: '#000',
            alignSelf: 'center',
          }}>
          Good Morning
        </Text>
        <Image
          source={require('../../assets/user.png')}
          style={{width: 50, height: 50, flex: 0, marginRight: 10}}
        />
        <View style={{alignSelf: 'center'}}>
          <YourComponent />
        </View>
      </View>

      <ScrollView
        style={{
          backgroundColor: '#fff',
          marginTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
          <View style={{flexDirection:'row',flex:1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#000',
            padding: 20,
            marginTop: 20,
            marginBottom: 20,
            flex:1
          }}>
          Your Forms
        </Text>
        <View style={{alignSelf:'center',justifyContent:'center',paddingEnd:20}}>
        <TouchableOpacity onPress={()=>OnClickLocation()}>
  <Icon style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',padding:10,borderRadius:30,borderColor:'#000',borderWidth:2,}} name="location-on" color='#fff' size={30} />
</TouchableOpacity></View>
</View>
        <ScrollView
          style={{margin: 20}}
          contentContainerStyle={{paddingBottom: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => selectPic('Requisition Form')}
              style={{
                backgroundColor: '#ffa500',
                width: '45%',
                height: 150,
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: '#ff8c00',
              }}>
              <Text style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>
                Requisition {'\n'} format
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPic('Customer Feedback')}
              style={{
                backgroundColor: '#ff0000',
                width: '45%',
                height: 150,
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: '#800000',
              }}>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>
                CUSTOMER{'\n'}FEEDBACK
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => selectPic('Noise Monitoring')}
              style={{
                backgroundColor: '#48d1cc',
                width: '45%',
                height: 150,
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: '#40e0d0',
              }}>
              <Text style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>
                NOISE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPic('Water Quality Monitoring')}
              style={{
                backgroundColor: '#00fa9a',
                width: '45%',
                height: 150,
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: '#66cdaa',
              }}>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>
                WATER
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => selectPic('AAQM Monitoring')}
              style={{
                backgroundColor: '#4169e1',
                width: '45%',
                height: 150,
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: '#000080',
              }}>
              <Text style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>
                AAQM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectPic('Emission Mnitoring')}
              style={{
                backgroundColor: '#c71585',
                width: '45%',
                height: 150,
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: '#800080',
              }}>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#fff'}}>
                EMISSION
              </Text>
            </TouchableOpacity>
          </View>

          
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
