import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import MovieItem from './MovieItem';

const MovieList = ({ movies, loading, navigateToDetails }) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.show.id.toString()}
      renderItem={({ item }) => <MovieItem movie={item} navigateToDetails={navigateToDetails} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default MovieList;
