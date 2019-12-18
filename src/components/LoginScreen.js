import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, AsyncStorage, Alert, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



  class SignInScreen extends React.Component {
          render() {
            return (
              <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                  {/* <StatusBar  translucent={false}  barStyle="light-content"/> */}
                    <Text style={styles.buttonText} onPress={this._signInAsync}>
                        Enter here! 
                    </Text>
                    {/* <TouchableOpacity > 
                    <Text  onPress={this.props.navigation.navigate('SignUp')}>REGISTER</Text>
                    </TouchableOpacity> */}
              </LinearGradient>

            );
          }
          _signInAsync = async () => {
            this.props.navigation.navigate('Home');
          };
          }
/////////////////////////////////////////////////////////////////////////////////////
          const styles = StyleSheet.create({
            linearGradient: {
             flex: 1,
             justifyContent: 'center', 
            },
            buttonText: {
              fontSize: 28,
              fontFamily: 'Gill Sans',
              textAlign: 'center',
              margin: 10,
              color: '#ffffff',
              backgroundColor: 'transparent',
            },
          });
  
          


export default SignInScreen;
