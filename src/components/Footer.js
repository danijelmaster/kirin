import React, { Component } from 'react';
import { Text,  StyleSheet, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './Button.js';
////////////////////////////////////////////////////////////////////////////
class FooterExample extends React.Component {
   render() {
      return (
      
            <ImageBackground style={{height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}
                   source = {{uri: 'https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}>
               <Text style={styles.ikona}>Earth</Text>
               <Text style={styles.ikona}>Planets</Text>
               <Button onPress={() => this.props.navigation.navigate('Nasa')} > NASA </Button>
               <Button title="Go to Coin Price" onPress={() => navigate('Coin')}> BitCoin </Button>
            </ImageBackground>
      
      
      );
}}
//////////////////////////////////////////////////////////////////////////////
   const styles = StyleSheet.create({
      ikona:{
         backgroundColor: 'transparent',
         fontSize: 20,
         color: 'white',
      }
   })

export default FooterExample;


