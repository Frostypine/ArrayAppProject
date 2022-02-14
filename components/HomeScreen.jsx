import * as React from 'react';

import {
  Text,
  View,
  Image,
  Button,
} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
   
    >
     
 
      <Image 
        source={arrayPic} 
        style={styles.arrayImg} 
        //onPress={() => navigation.navigate('Options')}
        />
 <Text>Home Screen</Text>
 <Button
        title="see options"
        onPress={() => navigation.navigate('Options')}
      />
    {/* <Text>app</Text> */}
    
    </View>
  );
}

export default HomeScreen; 