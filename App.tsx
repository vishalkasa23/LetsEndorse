/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Platform
} from 'react-native';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
const renderItem = ({ item}) => (
  <ListItem
    title={item.title}
    subtitle={item.subtitle}
    datetime={item.date}
  />
);
const Card = ({ title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
function App(): JSX.Element {
  const renderItem1 = ({ item }) => <Card title={item.title} subtitle={item.subtitle} />;
  const images = [
    { id: 1, title: 'EARNING', source: require('./assets/Earning.png') },
    { id: 2, title: 'CLIENTS', source: require('./assets/Client.png') },
    { id: 3, title: 'ORDERS', source: require('./assets/Orders.png') },
    { id: 4, title: 'CAMPAIGN', source: require('./assets/Campaign.png') },
    { id: 5, title: 'SETTINGS', source: require('./assets/Settings.png') },
  ];
  const data = [
    {
      "title": "Staff Salary",
      "subtitle": "₹ 12000",
      "date": "11:23 AM, 2 FEB"
    },
    {
      "title": "Purchase of Tools",
      "subtitle": "₹ 1600",
      "date": "11:23 AM, 2 FEB"
    },
    {
      "title": "Purchase of Makeup",
      "subtitle": "₹ 3500",
      "date": "11:23 AM, 2 FEB"
    },
    {
      "title": "Rent",
      "subtitle": "₹ 3500",
      "date": "11:23 AM, 2 FEB"
    }
  ];
  const cardData = [
    {
      id: '1',
      title: 'REVENUE THIS MONTH',
      subtitle: '₹ 14,680',
    },
    {
      id: '2',
      title: 'EXPENSES THIS MONTH',
      subtitle: '₹ 4,680',
    },
    {
      id: '3',
      title: 'PROFIT THIS MONTH',
      subtitle: '₹ 10,000',
    },
  ];
  return (
    <SafeAreaView>
      <View style={{margin:2,marginLeft:-2,padding:15,backgroundColor:'white'}}>
        <Text style={{fontSize:12,color:"#fb4873"}}>{'<< BACK TO DASHBOARD'}</Text>
      </View>
      <View>
      <View style={styles.view1}>
        <View style={{flexDirection:'row',marginBottom:-20}}>
        <Text style={{marginLeft:10,fontSize:18,marginBottom:-30,color:'white'}}>Welcome Kanika</Text>
        <View style={{marginLeft:100,backgroundColor:'white',marginTop:5,width:120,borderRadius:10}}>
          <Text style={{marginLeft:10,fontSize:10}}>Month</Text>
        </View>
        </View>
        <Image source={require("./assets/graph.png")} style={styles.graph}></Image>
      </View>
      <View style={[styles.view2,{height:130,justifyContent: 'center',
    alignItems: 'center'}]}>
      <FlatList
        data={cardData}
        renderItem={renderItem1}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
    </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>INCOME</Text>
        <View style={{flexDirection:'column',marginTop:10}}>
        <Text style={styles.textWithLine}>EXPENSE</Text>
        <View style={styles.line} />
        </View>
        
      </View>
      <View style={{ justifyContent: 'center',alignItems: 'center',marginTop:-50}}>
      <TouchableOpacity style={styles.Button}>
        <Text style={{color:'white',textAlign: 'center',fontWeight:'bold',marginTop:5}}>- LOG A NEW EXPENSE</Text>
      </TouchableOpacity>
      </View>
      <View style={{padding:25,marginTop:-20}}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
    </View>
      <View style={styles.container}>
      {images.map((image) => (
        <View key={image.id} style={styles.imageContainer}>
          <Image source={image.source} style={styles.image} />
          <Text style={styles.title}>{image.title}</Text>
        </View>
      ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    ...Platform.select({
      ios: {
        bottom: -52,
      },
      android: {
        bottom: -150,
      },
    }),
    left: 0,
    right: 0,
    // marginTop:'85%',
    height:60,
    width:'100%',
    backgroundColor:"#ff0065" 
  },
  view1: {
    height:160,
    width:500,
    backgroundColor: '#ff4673',
    position: 'absolute',
    marginTop:-10
  },
  graph:{
    // width: '100%',
    // height: '100%',
    marginTop:30,
    height:100,
    width:'70%',
    // marginLeft:-200,
    resizeMode:'stretch'

  },
  view2: {
    // width: 150,
    // height: 150,
    // backgroundColor: '#ff4f63',
    position: 'absolute',
    top: 110,
    marginLeft:5
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:60,
    marginTop:160
  },
  text: {
    fontSize: 18,
    marginRight: 10,
    fontWeight:'bold',
    color:'gray'
  },
  textWithLine: {
    fontSize: 18,
    paddingBottom: 5,
    color:"#ff0065",
    fontWeight:'bold',
    marginLeft:10
  },
  line: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: '#ff0065',
    width:100
    // marginLeft: 10,
  },
Button:{
  backgroundColor:"#ff4f63",width:'85%',height:30,borderRadius:10,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
        
},
  imageContainer: {
    alignItems: 'center',
    margin:5
  },
  image: {
    width: 40,
    height: 30,
    // borderRadius: 10,
    marginTop:5,

  },
  title: {
    marginTop: 1,
    color:'white',
    fontSize:10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:10,
  },
  title1: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#ff0065'
  },
  subtitle: {
    fontSize: 18,
    color: '#777a7d',
    fontWeight:'bold'
  },
});

export default App;
