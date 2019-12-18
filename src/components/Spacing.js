import React from 'react';
import { View, StyleSheet} from 'react-native';

const Spacing = ({variant = '1'}) => {
    return 
        <View style={styles[variant]} />;
    
};


const styles = StyleSheet.create ({
    1: {
        marginVertical: 5,
    },
    2: {
        marginVertical: 10,
    },
    3: {
        marginVertical: 15,
    },
});


export default Spacing;