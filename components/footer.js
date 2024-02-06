import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link, Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Tabbar = () => {
  const [iconConfigure] = useState({
    color: '#333',
    size: 22,
  });

  return (
    <View style={styles.container}>
      <View style={styles.Subcontainer}>
        <Link href="/">
        <FontAwesome5.Button style={styles.but} name="home" {...iconConfigure} />
        </Link>
        <Link href="/search" style={styles.but} asChild>
        <FontAwesome5.Button style={styles.but} name="search" {...iconConfigure} />
</Link>
        <FontAwesome5.Button style={styles.but} name="cross" {...iconConfigure} />
        <FontAwesome5.Button style={styles.but} name="play" {...iconConfigure} />
<Link href="/profile"> 
<TouchableOpacity>
        <Image
              style={styles.contentHeaderLeftImage}
              source={require('../assets/fotoo1.png')}
            />
            </TouchableOpacity>
            </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  but: {
    backgroundColor:"white"
  },
  Subcontainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    position: 'fixed',
    zIndex: 999,
    height: '40px',
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '50px',
    backgroundColor: 'black',
    bottom: '0',
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
  },
});

export default Tabbar;
