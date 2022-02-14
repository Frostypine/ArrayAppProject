import * as React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

function Assignments  ({ navigation })  {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
  
    <Text>Assignments Screen</Text>
    <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      
      </View>
    )}

    export default Assignments; 