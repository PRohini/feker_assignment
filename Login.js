import React,{Component} from 'react'
import {View,TextInput,Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Button, ThemeProvider,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, List, ListItem, InputGroup, Input, Text, Picker, Button } from 'native-base';

class LoginScreen extends Component {
constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
    onChangeUserName = (value) => {
    this.setState({
      username: value,
    });
  };

  onChangePassword = (value) => {
    // console.log(value)
      // Alert('creds are right')
    this.setState({
      password: value,
    });
  };

   onSubmit = () => {
    if(this.state.username.toLowerCase()==='test'&&this.state.password.toLowerCase()==='test'){
 
//  console.log('entered if')
  this.props.navigation.navigate('Home')
    }
    else{
    //  console.log('entered else')
     Alert.alert(
  'Error',
  'Invalid Username and Password',
  [
    
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ],
  { cancelable: false }
);
    }
  };

  render(){
    return (
      <Container style={{flex:1}}>
                <Content  style={{justifyContent:'center',alignContent:'center'}}>
                    <List style={{paddingHorizontal:10,paddingBottom:10}}>
                        <ListItem>
                            <InputGroup>
                                <Icon name="user" style={{ color: '#0A69FE' }} size={20} />
                                <Input placeholder="USERNAME"
                                onChangeText={ this.onChangeUserName}
                                 value={this.state.username}
                               />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="lock" style={{ color: '#0A69FE' }} size={20} />
                                <Input placeholder="PASSWORD" secureTextEntry 
                                 onChangeText={this.onChangePassword}
                                value={this.state.password}
                                
                                />
                            </InputGroup>
                        </ListItem>
                     </List>
                    <Button rounded onPress={this.onSubmit} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                       <Text> Sumbit </Text>
                    </Button>
                  
                </Content>
            </Container>
    
  );
  }
  
}

export default LoginScreen