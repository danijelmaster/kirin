import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';
import Footer from './Footer.js'
import LinearGradient from 'react-native-linear-gradient';
import Spacing from './Spacing.js';


class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Solar system',
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
      headerRight: () => (
        <TouchableOpacity>
        <LogoTitle/>
        </TouchableOpacity>
      ),
    };
    render() {
      const {navigate} = this.props.navigation;
      /* 2. Get the param, provide a fallback value if not available */
      return (
        <View style={{ flex: 1,  alignItems: 'stretch', justifyContent: 'space-around', backgroundColor: 'black'}}>
        <LinearGradient 
            colors={['#a13388', '#10356c']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
        
            <ScrollView style={{marginBottom: 0}}>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Nasa')}>
            <Image
              style={{height: 1000, width: 500  }}
              source={require ('../style/Images/hiclipart.com-id_dpjjn.png')}
            />
          </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, 
              either directly or indirectly. 
              Of the objects that orbit the Sun directly, 
              the largest are the eight planets, with the remainder being smaller objects, 
              such as the five dwarf planets and small Solar System bodies.
              </Text>

            
            </ScrollView>
            {/* <Button
        title="Go to Coin Price"
        onPress={() => navigate('Coin')}
      /> */}

          <Footer/>
         </LinearGradient>
        </View>
      );
    }
  }







  class LogoTitle extends React.Component {
    render() {
      return (
        
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png'}}
          style={{ width: 50, height: 50 }}
          
        />
        
      );
    }
  }

  export default DetailsScreen;