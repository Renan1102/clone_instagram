import { StyleSheet, SafeAreaView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/header';
import Stories from '../components/stories';
import Feed from '../components/feed';
import Footer from '../components/footer';

export default function TabOneScreen() {
  return (
    <>
     
      <SafeAreaView style={styles.container}>
        <Header/>
        <Stories/>
        <Footer/>
        <Feed/>
      </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
