import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export const YourComponent = () => (
  <View>
    <Menu>
      <MenuTrigger
        text={
          <Icon
            name="ellipsis-v"
            size={25}
            color="#000"
          />
        }
      />
      <MenuOptions>
       
        <MenuOption onSelect={() => alert(`Delete`)}>
          <Text style={{padding:15,color:'#000',fontWeight:'500'}}>Log Out</Text>
        </MenuOption>
       
      </MenuOptions>
    </Menu>
  </View>
);
