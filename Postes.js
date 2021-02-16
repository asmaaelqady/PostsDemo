import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image,TouchableOpacity ,StyleSheet} from "react-native";

const posts = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
  
    <View
      style={styles.list}
    >
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => index.toString()}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}   onPress={() =>
                navigation.navigate("Details", {
                  ID: item.id,
                })
              }>
          <View
            style={styles.cardContent}
          >
            <Image
              style={styles.postImage}
              source={{
                uri:
                  "https://www.boldbusiness.com/wp-content/uploads/2017/03/Satellite-Imaging-e1493728124748.jpg",
              }}
            />

            <Text
            style={styles.title}
            >
              {item.title}
            </Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
    
  );
};

export default posts;

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

