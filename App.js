/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NasaScreen from './src/components/NasaScreen.js';
import LoginScreen from './src/components/LoginScreen';
import DetailsScreen from './src/components/DetailsScreen';
import HomeScreen from './src/components/HomeScreen';
import FooterExample from './src/components/Footer.js';
import App2 from './App2.js'
import Form from './src/components/Register.js';
// import firebase from 'react-native-firebase';


// firebase.auth()
//   .signInAnonymously()
//   .then(credential => {
//     if (credential) {
//       console.log('default app user ->', credential.user.toJSON());
//     }
//   });



const RootStack = createStackNavigator({
    Footer: FooterExample,
    Home: HomeScreen,
    Details: DetailsScreen,
    Nasa: NasaScreen,
    SignUp: {
            screen: Form,
            navigationOptions: { header: null,},
    },
    Login: { 
            screen: LoginScreen,  
            navigationOptions: { header: null,},
    },
    Coin:  {
            screen: App2, 
            navigationOptions: { header: null,},
    },
  },
////////////////////////////////////////////////  
  {
  initialRouteName: 'SignUp',
  }
////////////////////////////////////////////////
);









const AppContainer = createAppContainer(RootStack);

export default AppContainer;














// export default class App extends React.Component {
//   render() {
//     return <AppContainer/>
    
//   }
// }
