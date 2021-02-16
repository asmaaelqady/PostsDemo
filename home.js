
import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
      return (
        <View style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
          <Text style={{fontWeight:600,fontSize:30}}>Home Screen</Text>
            <TouchableOpacity
        onPress={() => navigation.navigate('Posts')}
          style={{
            borderWidth: 1,
            borderColor: "#990000",
            alignItems: "center",
            justifyContent: "center",
            height:50,
            width:250,
            backgroundColor: "#990000",
            borderRadius: 30,
            alignContent:'center',
            margin:30,
          }}
        ><View><Text style={{fontSize:18,fontWeight:'500',color:"white"}}>Get Posts</Text></View></TouchableOpacity>
        </View>
      );
  };
  
  export default Home;
  

   

    // const {navigate} = useNavigation()
