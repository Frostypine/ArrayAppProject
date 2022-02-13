function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
   
        <Image 
          source={arrayPic} 
          style={styles.arrayImg}
          />
   <Text>Home Screen</Text>
  
      {/* <Text>app</Text> */}
      
      </View>
    );
  }

  export default HomeScreen; 