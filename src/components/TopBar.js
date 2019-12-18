import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
  render() {
    console.log('q', this.props)
    return (
        <View style={styles.container}>
        <Text>Left</Text>
        <View>
          <Text style={{ fontSize: 20 }}>{this.props.title}</Text>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>{this.props.refreshDate || '-'}</Text>
        </View>
        <Text>Right</Text>
      </View>
      )
    }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    // paddingTop: 0,
    // marginTop: 10,
    maxHeight: 52,
    flexDirection: 'row', // row
    backgroundColor: '#478cba',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;