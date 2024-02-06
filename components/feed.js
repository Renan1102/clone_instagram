import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text,  ScrollView , View } from 'react-native';

const Feed = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
< ScrollView >
    {data.map((item) => (
        <View key={item.id}>
          <View style={styles.content} >
            <View style={styles.contentHeader}>
              <View style={styles.contentHeaderLeft}>
                <Image
                  style={styles.contentHeaderLeftImage}
                  source={require('../assets/fotoo1.png')}
                />
                <Text style={styles.contentHeaderLeftText}>User {item.id}</Text>
              </View>
              <Image
                source={require('../assets/pontos.png')}
                style={styles.pontos}
              />
            </View>
            <Image
              source={{
                uri: 'https://preview.redd.it/random-people-on-the-streets-v0-btkh6eb62yoa1.png?width=640&crop=smart&auto=webp&s=46e02c9200c2e691f3ee11e830d319dc92e54022',
              }}
              style={styles.contentImage}
            />
          </View>
          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
                  }}
                  style={styles.ico}
                />
                <Image source={require('../assets/conv.png')} style={styles.ico} />
                <Image
                  source={require('../assets/cursor.png')}
                  style={styles.ico}
                />
              </View>
              <Image source={require('../assets/bok.png')} style={styles.ico} />
            </View>
          </View>

          <View style={styles.contentFooterTexts}>
            <Text style={[styles.contentFooterText1, styles.contentFooterText]}>
              {item.title}
            </Text>
            <Text style={[styles.contentFooterText2, styles.contentFooterText]}>
              Ver todos os 30 comentários
            </Text>
          </View>
          <Text style={[styles.contentFooterText3, styles.contentFooterText]}>
            Há 3 horas .
          </Text>
        </View>
      ))
    }
    </ ScrollView >
  );
};

export default Feed;

const styles = StyleSheet.create({
  pontos: {
    height: 30,
    width: 20,
  },
  ico: {
    height: 25,
    width: 25,
    marginTop: 20,
    backgroundColor: '',
  },
  content: {
    width: '100%',
    marginBottom: -12,
  },
  contentHeader: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  contentHeaderLeftText: {
    color: '#fff',
  },

  contentImage: {
    width: '100%',
    height: 355,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentFooterOptionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentFooterText: {
    color: '#fff',
  },
  contentFooterTexts: {
    paddingLeft: 12,
    gap: 1,
  },
  contentFooterText1: {
    fontSize: 14,
    paddingTop: 10,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
    paddingLeft: 12,
  },
});