import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MovieList from '../components/MovieList';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const navigateToDetails = (movie) => {
    navigation.navigate('Details', { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Welcome to our Movie App</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        placeholderTextColor="#000"
        onFocus={() => navigation.navigate('Search')}
      />
      <MovieList movies={movies} loading={loading} navigateToDetails={navigateToDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#fff',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
});

export default HomeScreen;
