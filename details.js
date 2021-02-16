
import React,{ useEffect, useState } from 'react';
import { Text, View , Image,StyleSheet} from 'react-native';

const Details = ({route}) => {
    const [data, setData] = useState([]);
        
    useEffect (()=> {
     fetch('https://jsonplaceholder.typicode.com/posts/'+route.params.ID)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, []);
  
 return (
    <View style={styles.cardContent}>
    <Image
      style={styles.postImage}
      source={{
        uri:
          "https://www.boldbusiness.com/wp-content/uploads/2017/03/Satellite-Imaging-e1493728124748.jpg",
      }}
    />
<View style={{flex:1,flexDirection:"colom"}}>
<View style={{flex:1,flexDirection:"row "}}>
              <Text style={{ fontSize:20,fontWeight:700, textAlign: 'start', color:"#990000"}}> ID: </Text>
    <Text style={{ fontSize:20,fontWeight:500, textAlign: 'center'}}>
   {data.id}
    </Text>
    </View>
<View style={{flex:1,flexDirection:"row "}}>
              <Text style={{ fontSize:20,fontWeight:700, textAlign: 'start', color:"#990000"}}> Title: </Text>
    <Text style={{ fontSize:17,fontWeight:500, textAlign: 'center'}}>
   {data.title}
    </Text>
    </View> 
              <View style={{flex:1,flexDirection:"row"}}>
              <Text style={{ fontSize:20,fontWeight:700, textAlign: 'start', color:"#990000"}}> Discription : </Text>
              <Text style={{ fontSize:17,fontWeight:500,textAlign:'center'}}>
    {data.body}
    </Text>
                  </View>  
  </View>

</View>
      )
  };
  
  export default Details;
  const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 12,
      backgroundColor:"white",
      flexBasis: '46%',
      marginHorizontal: 20,
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    title:{
      fontSize:17,
      flex:1,
      alignSelf:'center',
      color:"#000",
      fontWeight:'bold',
      marginVertical:10,
      marginHorizontal:10
    },
    postImage:{
            width: '100%',
            height: 200,
    },
  });    
