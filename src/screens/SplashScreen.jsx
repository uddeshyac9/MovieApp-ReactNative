import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.image} />
      <Text style={styles.title}>MovieApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginTop: 20,
  },
});

export default SplashScreen;
