import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image,  } from 'react-native';
import Footer from './Footer.js'
import LinearGradient from 'react-native-linear-gradient';




class NasaScreen extends React.Component {
    static navigationOptions = {
      title: 'NASA',
      headerBackground: (
        <LinearGradient
        colors={['#a13388', '#10356c']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
    };
    render() {
      return (
        
        <View style={{ flex: 1,  alignItems: 'stretch', justifyContent: 'space-around', backgroundColor: 'black'}}>
          <LinearGradient 
              colors={['#a13388', '#10356c']}
              style={{ flex: 1 }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
                <ScrollView style={{marginBottom: 0}}>
                  <Image
                    style={{height: 300 , left: 15,  top: 0,  }}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png'}}
                  />
                      <Text style={{backgroundColor: 'transparent', color: 'white' , fontSize: 15, marginTop: 20, textAlign: 'center'}}>The National Aeronautics and 
                      Space Administration (NASA), is an independent agency of the United States Federal Government responsible for the civilian space program,
                      as well as aeronautics and aerospace research.NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). 
                      </Text>
                      
                        <Image style={{height: 300, top: 10}}
                        source={{uri: 'https://images.livemint.com/img/2019/07/22/600x338/02625990-ac88-11e9-9ebf-d05684a82396_1563824899534_1563824984154.jpg'}}/>
                      
                      <Text style={{backgroundColor: 'transparent', color: 'white' , fontSize: 15, marginTop: 20, textAlign: 'center'}}>The National Aeronautics and 
                      Space Administration (NASA),
                      is an independent agency of the United States Federal Government responsible for the civilian space program,
                      as well as aeronautics and aerospace research.NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). 
                      </Text>
          </ScrollView>
          <Footer/>
        </LinearGradient>
        </View>

      );
    }
  }
  
  export default NasaScreen;