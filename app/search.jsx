import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import Footer from '../components/footer';

const Profile = (props) => {
  const { profile, onFollowToggled, hasFollowed, isFollowHidden } = props;

  const toggleFollow = () => {
    onFollowToggled(profile, hasFollowed);
  };

  if (profile) {
    return <></>;
  }

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
    < ScrollView style={styles.tudo}>
   
      
      <View style={styles.headerContainer}>
      <View style={styles.search}>
        <Image
          style={styles.ImageSearch}
          source={require('../assets/search.svg')}
        />
        <Text style={styles.TextSearch}>Pesquisar</Text>
      </View>
        <View style={styles.listaFotos}>
        <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} // Número de colunas desejado para a grade de imagens
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.ImageGrade} />
        )}
      />
         
          
        </View>
      </View>

      
     
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  tudo: {
    backgroundColor: 'black',
    height: "100%",
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
    flex: 1,
    aspectRatio: 1, // Mantém a proporção da imagem
    margin: 1, // Espaçamento entre as imagens
    marginLeft: '30px'
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
    paddingTop: 20,
    
  },
});

export default Profile;
