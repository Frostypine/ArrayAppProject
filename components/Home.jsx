import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text} from 'react-native';

import arrayPic  from './pics/arrayimg1.png';
import arrayPic2 from './pics/arrayimg2.png'; 

const Home =()=> {
 
    return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
        source={arrayPic} 
        style={styles.arrayImg}
        />
 
       <Text>
            app
           </Text>
       

    </View>);
  
}
export default Home; 