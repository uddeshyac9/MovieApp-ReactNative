import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.show.image?.medium }} style={styles.image} />
      <Text style={styles.title}>{movie.show.name}</Text>
      <Text style={styles.summary}>{movie.show.summary.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingHorizontal:20,
    backgroundColor: '#000',
    
  
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginTop:5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  summary: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DetailsScreen;
