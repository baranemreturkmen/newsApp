import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './data/news_data.json';
import news_banner_data from './data/news_banner_data.json';

//Text data.item dersen yazı olarak yazdırır değiken için {data.item} şeklinde kullanmak lazım.
//Json objem varsa parçalamak için {item} şeklinde kullanabiliyoruz.
//news customCompenent'in prop'u istediğim ismi verebilirim. news yerine.

function App() {

const renderNews = ({item}) => <NewsCard news = {item}></NewsCard>
const keyNews = item => item.u_id.toString

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
        <FlatList 
          ListHeaderComponent={() => (<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => (<Image 
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}/>))
            }
          </ScrollView>)}
          keyExtractor={keyNews}
          data={news_data} 
          renderItem={ renderNews }>
        </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eceff1'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
})

export default App;