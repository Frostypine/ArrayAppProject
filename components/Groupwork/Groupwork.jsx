import * as React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

function Groupwork  ({ navigation }) {return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
  
    <Text>Groupwork Screen</Text>
    <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      
      </View>
    )}

    export default Groupwork; 