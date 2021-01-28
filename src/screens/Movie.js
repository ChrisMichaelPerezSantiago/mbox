import React from 'react';
import { View, Dimensions, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../components/Footer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const Movie = ({route}) => {
  const {params} = route;
  const {movie} = params;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={{uri: movie.poster_big}} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.flexRow}>
          <Text style={[styles.year, styles.textWhite]}>{movie.year}</Text>
          <Text style={[styles.textWhite, styles.genres]}>{movie.genres.join(' | ')}</Text>
        </View>
        <View>
          <Text style={[styles.textWhite, styles.title]}>{movie.title}</Text>
          <View style={[styles.flexRow, styles.flexEnd]}>
            <Text style={[styles.textWhite, styles.imdbScore]}>{movie.rating}</Text>
            <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
            <Text style={[styles.textWhite, styles.imdb]}>IMDb</Text>
          </View>
          <Text style={[styles.textWhite, styles.desc]} numberOfLines={6}>{movie.description}</Text>
        </View>
      </View>
      <Footer trailer={movie.trailer_url} />
      <LinearGradient colors={['transparent', '#00000080', '#000000', '#000000']} style={styles.linearGradient} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
  topContainer: {height: (height - 100) / 2, width},
  image: {width, height: height - 200, position: 'absolute', top: 0, left: 0, zIndex: 5},
  bottomContainer: {flex: 1, paddingHorizontal: 25, position: 'relative', zIndex: 10},
  flexRow: {flexDirection: 'row'},
  textWhite: {color: '#ffffff'},
  year: {fontFamily: 'Inter_600SemiBold'},
  genres: {marginLeft: 10, fontFamily: 'Inter_600SemiBold', color: '#ffffff90'},
  linearGradient: {height: height, width, position: 'absolute', bottom: 0, left: 0, zIndex: 6},
  flexEnd: {alignItems: 'flex-end',},
  imdbScore: {fontFamily: 'Inter_600SemiBold', fontSize: 18},
  imdbScoreOverall: {fontFamily: 'Inter_600SemiBold', fontSize: 15, color: '#ffffff80'},
  imdb: {fontFamily: 'Oswald_600SemiBold', fontSize: 18, marginLeft: 10, color: '#ffba00'},
  desc: {marginTop: 10, fontFamily: 'Inter_400Regular'},
  title: {fontFamily: 'Oswald_600SemiBold', fontSize: 18, textTransform: 'uppercase', lineHeight: 56, marginVertical: 20},
});

export default Movie;