import React, { Component } from 'react';
import { View,Text} from 'react-native';

import arrayPic  from './pics/arrayimg1.png';
import arrayPic2 from './pics/arrayimg2.png'; 

function Home() {
 
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