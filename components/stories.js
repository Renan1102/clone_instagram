import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native'

const Stories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => response.json())
      .then((json) => {
        // Limitar o número de imagens a serem exibidas (por exemplo, 10)
        const limitedData = json.slice(0, 10);
        setData(limitedData);
      });
  }, []);

  return (
    <View style={styles.storesContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.store}>
            <View style={styles.storeImageContainer}>
              <Image source={{ uri: item.url }} style={styles.storesCardImage} />
            </View>
          </View>
        )}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
      />
    </View>
  )
}

export default Stories;

const styles = StyleSheet.create({
  storesContainer: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 6,
    paddingVertical: 10,
    borderColor: '#ff8501',
    justifyContent: 'center', // Centraliza horizontalmente
  },
  store: {
    width: 70, // Largura de cada story
    height: 70, // Altura de cada story
    borderRadius: 35, // Metade da largura/altura para criar um círculo
    borderWidth: 2,
    borderColor: '#ff8501', // Cor da borda laranja
    marginRight: 12, // Espaço entre os stories
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32, // Metade da largura/altura para a imagem preencher o círculo
    overflow: 'hidden', // Certifica-se de que a imagem seja recortada para dentro do círculo
  },
  storesCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Garante que a imagem preencha o círculo
  },
});
