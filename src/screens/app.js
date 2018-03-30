import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { connect } from "react-redux";
import { fetchLoginFromAPI } from "../actions/loginActions";

const App = props => {
  const { isLogging, success, error, errorMessage } = props.login;
  let email = "";
  let password = "";

  return (
    <View>
      <Text>SmartQueue</Text>
      <TextInput
        ref={input => (this.emailInput = input)}
        placeholder="Email"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        blurOnSubmit={false}
        onChangeText={text => (email = text)}
      />
      <TextInput
        ref={input => (this.passwordInput = input)}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={text => (password = text)}
      />
      <Button title="Entrar" onPress={() => props.getLogin(email, password)} />
      {isLogging && <Text>Loading</Text>}
      {success && <Text>Login Successful</Text>}
      {error && <Text>Error: {errorMessage}</Text>}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLogin: (email, password) => dispatch(fetchLoginFromAPI(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
