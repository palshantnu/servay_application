import { View, Text ,TextInput,StatusBar,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Login = ({navigation}) => {
  return (
    <View>
       <StatusBar
        animated={true}
        backgroundColor="#61dafb"
         />
    <View style={{alignSelf:'center',height:height*1,backgroundColor:'#f0f8ff',width:width*1}}>
      <View style={{justifyContent:'center',flex:1,padding:30}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 25,
            padding: 10,
            color: '#000',
            fontWeight: 'bold',
          }}>
          Login
        </Text>

        <View>
         
          <TextInput
            style={{ height: 50,backgroundColor:'#fff',borderRadius:5}}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="enter your email"
        
          />
          <TextInput
            style={{ height: 50,backgroundColor:'#fff',marginTop:50,borderRadius:5}}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="enter your password"
            
          />
          <TouchableOpacity
            style={{
              marginTop: 30,
              backgroundColor: '#000',
              padding: 15,
              width: '90%',
              alignSelf: 'center',borderRadius:5
            }}
            onPress={() => navigation.navigate('MainScreen')}>
            <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{alignSelf: 'flex-end'}}>
          <Text
            style={styles.lablels}
            onPress={() => navigation.navigate('Signup')}>
            don't Have any account
          </Text>
        </View> */}
      </View>
    </View>
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
  lablels: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    margin: 20,
  },
});