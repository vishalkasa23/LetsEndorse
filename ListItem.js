import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const ListItem = ({ title, subtitle, datetime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.datetime}>{datetime}</Text>
        <Image source={require('./assets/arrow.png')} style={styles.arrow} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'gray'
  },
  subtitle: {
    fontSize: 14,
    color: '#ff0065',
    fontWeight:'bold'
  },
  rightContainer: {
    flexDirection: 'column',
    alignItems:'flex-end',
  },
  datetime: {
    fontSize: 11,
    marginRight: 10,
  },
  arrow: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
});

export default ListItem;
