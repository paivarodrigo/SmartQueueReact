import React from 'react';
import { 
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

import { connect } from 'react-redux';
import { fetchLoginFromAPI } from '../actions/loginActions';

let styles;

const App = (props) => {
    const { isLogging, success, error } = props.login;
    this.state = { email: '', password: '' };
    return (
        <View>
            <Text>SmartQueue</Text>
            <TextInput placeholder='Email' onChangeText={(email) => this.state.setState({email})} value={this.state.email} />
            <TextInput placeholder='Senha' onChangeText={(password) => this.state.setState({password})} value={this.state.password} secureTextEntry={true} />
            <Button title='Entrar' onPress={() => props.getLogin()} />
            {
                isLogging && <Text>Loading</Text>
            }
            {
                success && <Text>Login Successful</Text>
            }
        </View>
    );
}