import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const placeholderImage = 'https://via.placeholder.com/100'; // URL for the placeholder image

const MovieItem = ({ movie, navigateToDetails }) => {
  const imageUrl = movie.show.image ? movie.show.image.medium : placeholderImage;
  
  return (
    <TouchableOpacity onPress={() => navigateToDetails(movie)} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.show.name}</Text>
        <Text style={styles.summary}>
          {movie.show.summary
            ? movie.show.summary.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100) + '...'
            : 'No summary available'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  summary: {
    fontSize: 14,
    color: '#fff',
  },
});

export default MovieItem;
