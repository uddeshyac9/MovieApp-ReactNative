import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MovieList from '../components/MovieList';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchMovies(query);
  };

  const navigateToDetails = (movie) => {
    navigation.navigate('Details', { movie });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        placeholderTextColor="#000" 
        value={searchQuery}
        onChangeText={handleSearch}
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
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    color:'red'
  },
});

export default SearchScreen;
