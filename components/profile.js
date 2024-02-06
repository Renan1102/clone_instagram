import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
} from 'native-base';

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
      <View style={styles.headerContainer}>
        <View style={styles.top}>
          <View style={styles.headerImageContainer}>
            <Image
              style={styles.headerImage}
              source={require('../assets/fotoo1.png')}
            />
          </View>

          <View style={styles.headerRight}>
            <View style={styles.headerInfoContainer}>
              <View style={styles.headerNumberOfPostsContainer}>
                <Text style={[styles.headerLabel, styles.headerLabelBold]}>
                  100
                </Text>
                <Text style={styles.headerLabel}>Publicações</Text>
              </View>
              <View style={styles.headerNumberOfFollowersContainer}>
                <Text style={[styles.headerLabel, styles.headerLabelBold]}>
                  100
                </Text>
                <Text style={styles.headerLabel}>Seguidores</Text>
              </View>
              <View style={styles.headerNumberOfFollowersContainer}>
                <Text style={[styles.headerLabel, styles.headerLabelBold]}>
                  200
                </Text>
                <Text style={styles.headerLabel}>Seguidores</Text>
              </View>
            </View>
            <View style={styles.headerNumberOfFollowingContainer}></View>
          </View>

          <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              {' '}
              Maria Clara
            </Text>
            <Text style={{ color: 'white' }}> Status perfil</Text>
          </View>

          <View style={styles.edit}>
            {!isFollowHidden && (
              <TouchableOpacity style={styles.followBtn} onPress={toggleFollow}>
                <Text style={styles.followTxt}>
                  {hasFollowed ? 'Followed' : 'Editar Perfil'}
                </Text>
              </TouchableOpacity>
            )}

            {!isFollowHidden && (
              <TouchableOpacity style={styles.followBtn} onPress={toggleFollow}>
                <Text style={styles.followTxt}>
                  {hasFollowed ? 'Followed' : 'Compartilhar perfil'}
                </Text>
              </TouchableOpacity>
            )}
            <Image
              source={require('../assets/add.png')}
              style={{ width: '20px', height: '30px', marginLeft: '6px' }}
            />
          </View>
        </View>
        <View style={styles.gradiado}>
          <Image style={styles.grade} source={require('../assets/grade.png')} />
          <Image style={styles.grade} source={require('../assets/retra.png')} />
        </View>
        <View style={styles.listaFotos}>
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
          />
          <Image
            style={styles.ImageGrade}
            source={require('../assets/cara.png')}
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
  headerImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 96 / 2,
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 10,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 86 / 2,
  },
  ImageGrade: {
    marginTop: '10px',
    width: 100,
    height: 100,
    margin: 1,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'column',
  },
  headerInfoContainer: {
    flexDirection: 'row',
    
  },
  headerNumberOfPostsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerNumberOfFollowersContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerNumberOfFollowingContainer: {
    flex: 1,
  },
  headerLabel: {
    fontSize: 10,
    marginLeft: 100,
    color: 'white',
  },
  headerLabelBold: {
    fontWeight: 'bold',
  },
  followBtn: {
    backgroundColor: '#797a7a',
    borderRadius: 6,
    paddingVertical: 8,
    fontSize: '14px',
    width: 130,
    height: 33,
    marginLeft: '4px',
  },
  followTxt: {
    backgroundColor: '#797a7a',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  edit: {
    flex: 1,
    flexDirection: 'row',
  },
  grade: {
    width: '20px',
    height: '20px',
  },
  gradiado: {
    width: '100%',
    height: '30px',
    marginTop: '40px',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // borderBottom: 'solid 0.1px silver'
  },
  listaFotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 6,
  },
});

export default Profile;
