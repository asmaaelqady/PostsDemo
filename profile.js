import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Home = ({navigation}) => {

    return (
      <View style={styles.container}>
          <View style={{backgroundColor: "#990000",height:200,}}></View>
          <Image style={styles.img} source={{uri: 'https://www.boldbusiness.com/wp-content/uploads/2017/03/Satellite-Imaging-e1493728124748.jpg'}}/>
          <View style={{marginTop:40}}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Asmaa Salah</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:'white'}}>settings</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
export default Home;

const styles = StyleSheet.create({
 
  img: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#990000",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:15,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#990000",
  },
});
