function Options({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
   <Text>Options:</Text>
   <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Go to Lessons"
          onPress={() => navigation.navigate('Lessons')}
        />
        <Button
          title="Go to Assignments"
          onPress={() => navigation.navigate('Assignments')}
        />
        <Button
          title="Go to Groupwork"
          onPress={() => navigation.navigate('Groupwork')}
        />
        <Button
          title="Go to Resources"
          onPress={() => navigation.navigate('Resources')}
        />
      
        
  
      {/* <Text>app</Text> */}
      
      </View>
    );
  }

  export default Options; 