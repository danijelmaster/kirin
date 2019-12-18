import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Image, AsyncStorage,ImageBackground } from 'react-native';
import Footer from './Footer';
import LinearGradient from 'react-native-linear-gradient';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Earth',
      headerBackground: (
        <ImageBackground style={{height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}
                   source = {{uri: 'https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>
        
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
    };
    render() {
      return (
        <LinearGradient 
          colors={['#a13388', '#10356c']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
              <ScrollView>
                 <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details') }}>
                    <Image
                      style={{height: 250, width: 250, alignSelf: 'center'}}
                      source={{uri: 'http://clipart-library.com/images_k/earth-transparent-clipart/earth-transparent-clipart-11.png'}}
                    />
                  </TouchableOpacity>
                  <Text style={{color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center', }}>
                    What is in the earth?
                    What is Earth made of? The Earth is made out of many things. Deep inside Earth, near its center, 
                    lies Earth's core which is mostly made up of nickel and iron. ... The rocky surface layer of Earth, 
                    called the crust, is made up of mostly oxygen, silicon, aluminum, iron, calcium, sodium, potassium and magnesium.
                  </Text>
                  <Image
                    style={{height: 550}}
                    source = {{uri: 'https://www.solarsystemscope.com/spacepedia/images/handbook/renders/earth.png'}}
                  />
              </ScrollView>
          <Footer/>
        </LinearGradient>
      );
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default HomeScreen;
