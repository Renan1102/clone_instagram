import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import Footer from './footer';

const Profile = (props) => {
  const { profile, onFollowToggled, hasFollowed, isFollowHidden } = props;

  const toggleFollow = () => {
    onFollowToggled(profile, hasFollowed);
  };

  if (profile) {
    return <></>;
  }

  return (
    <>
      <View style={styles.search}>
        <Image
          style={styles.ImageSearch}
          source={require('../assets/search.svg')}
        />
        <Text style={styles.TextSearch}>Search</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.listaFotos}>
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/fotoo1.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/carro.webp')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/Paisagem-1.jpg')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/fotoo1.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/carro.webp')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/Paisagem-1.jpg')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/fotoo1.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/carro.webp')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/Paisagem-1.jpg')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/fotoo1.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/carro.webp')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/Paisagem-1.jpg')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/fotoo1.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/carro.webp')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/Paisagem-1.jpg')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/fotoo1.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/carro.webp')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/Paisagem-1.jpg')}
          />
          
        </View>
      </View>

      <Footer style={{ position: 'fixed' }} />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',

    padding: 12,
  },
  search: {
    height: 30,
    width: '100%',
    backgroundColor: '#706e6e',
    marginStart: 10,
    marginTop: 5,
    borderRadius: 10,
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ImageGrade: {
    marginTop: '10px',
    width: 95,
    height: 95,
    margin: 1,
  },
  ImageSearch: {
    width: 15,
    height: 15,
    alignSelf: 'center',
    marginStart: 10,
  },
  TextSearch: {
    paddingLeft:10,
    color:'#f0f0f0',
    alignSelf: 'center',
     },
  listaFotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 6,
  },
});

export default Profile;
