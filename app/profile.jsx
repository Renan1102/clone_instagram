import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView
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

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos?id=1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
    < ScrollView >
    {data.map((item) => (
        <View key={item.id}>
      <View style={styles.headerContainer}>
        
        <View style={styles.top}>
          

          <View style={styles.headerRight}>
            <View style={styles.headerInfoContainer}>
              <View style={styles.headerImageContainer}>
            <Image
              style={styles.headerImage}
              source={require('../assets/fotoo1.png')}
            />
          </View>
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

          <View style={{ paddingVertical: 10, paddingHorizontal: 10, marginLeft:'5%' }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              {' '}
              Maria Clara
            </Text>
            <Text style={{ color: 'white' }}> {item.title}</Text>
          </View>

          <View style={styles.edit}>
            {!isFollowHidden && (
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followTxt}>
                  {hasFollowed ? 'Followed' : 'Editar Perfil'}
                </Text>
              </TouchableOpacity>
            )}

            {!isFollowHidden && (
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followTxt}>
                  {hasFollowed ? 'Followed' : 'Compartilhar perfil'}
                </Text>
              </TouchableOpacity>
            )}
            <Image
              source={require('../assets/add.png')}
              style={{ width: '40px', height: '30px', marginLeft: '6px' }}
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
            source={{uri : item.url}}
          />
          <Image
            style={styles.ImageGrade}
            source={{uri : item.url}}
          />
          <Image
            style={styles.ImageGrade}
            source={{uri : item.url}}
          />
          <Image
            style={styles.ImageGrade}
            source={{uri : item.url}}
          />
          <Image
            style={styles.ImageGrade}
            source={{uri : item.url}}
          />
          
          
        </View>
       
      </View>

     
      </View>
      ))
    }
      </ScrollView>
      <Footer style={{ position: 'fixed' }} />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
  },
  headerImageContainer: {
    width: 80, // Aumente o tamanho para 80x80
    height: 80, // Aumente o tamanho para 80x80
    borderRadius: 40, // Faça o raio metade da largura/altura para criar um círculo
    borderWidth: 2,
    borderColor: 'white', // Mude a cor da borda para branco
    marginTop: 16, // Aumente a margem superior
    marginLeft: 16, // Aumente a margem esquerda
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 76, // Ajuste o tamanho para que a imagem se ajuste ao círculo
    height: 76, // Ajuste o tamanho para que a imagem se ajuste ao círculo
    borderRadius: 38, // Metade da largura/altura da imagem
  },
  ImageGrade: {
    marginTop: 10,
    marginLeft: '3%',
    width: '30%',
    height: 300,
    margin: 1,
  },
  headerRight: {
    width: 300,
    marginBottom: 30,
    marginTop: 20,
    flexDirection: 'row',
    
    alignItems: 'center', // Distribui os elementos horizontalmente
    marginHorizontal: 16, // Adiciona margem horizontal para espaçamento
  },
  headerInfoContainer: {
    flexDirection: 'row',
  },
  headerNumberOfPostsContainer: {
    marginLeft: 50,
    alignItems: 'center',
    marginTop: '3%'
  },
  headerNumberOfFollowersContainer: {
    alignItems: 'center',
    marginLeft: 100,
    marginTop: '3%'
  },
  headerNumberOfFollowingContainer: {
    alignItems: 'center',
  },
  headerLabel: {
    fontSize: 20,
    color: 'white',
  },
  headerLabelBold: {
    fontWeight: 'bold',
  },
  followBtn: {
    backgroundColor: '#797a7a',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16, // Adiciona padding horizontal para espaçamento
    fontSize: 14, // Remova aspas em '14px'
    // width: 150, // Remova a largura fixa para que o botão se ajuste ao conteúdo
    height: 33,
    marginLeft: 8, // Ajuste a margem esquerda para espaçamento
  },
  followTxt: {
    backgroundColor: '#797a7a',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  edit: {
    flexDirection: 'row',
    marginLeft: '5%', // Aumente a margem esquerda
  },
  grade: {
    width: 35,
    height: 35,
    
  },
  gradiado: {
    height: 30,
    marginTop: 16, // Aumente a margem superior
    justifyContent: 'space-evenly', // Distribui os elementos horizontalmente
    flexDirection: 'row',
  },
  listaFotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 6,
    paddingHorizontal: 16, // Adiciona padding horizontal para espaçamento
  },
});

export default Profile;
