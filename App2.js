import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CoinView from './src/components/CoinView';
import TopBar from './src/components/TopBar';

/////////////////////////////////////////////////////////////////////////////////
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      refreshDate: '',
    };
  }
componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
      that.setState({
        refreshDate:
          date + '/' + month + '/' + year + ' ' + hours + ':' + min  ,
    });
  }
  _setRefreshDate = (date) => { // Called from CoinView's prop
    console.log('Updated: '+ date);
    this.setState({
      refreshDate: date,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#C2185B' barStyle="light-content" />
          <TopBar title="Show Me The Coin" refreshDate={this.state.refreshDate} />
            <CoinView
              refreshDate={this._setRefreshDate}
              style={styles.coinView}
            />
      </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  
  container: {
    flex: 1
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
}
});