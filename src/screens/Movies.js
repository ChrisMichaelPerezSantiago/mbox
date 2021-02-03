import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import { getMovies } from '../ducks/movies/action';

const {width} = Dimensions.get('window');

const headerBtns = [
  'Shows', 'Movies'
];

const listToMatrix = (list, elementsPerSubArray) => {
  var matrix = [], i, k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
}

const HeaderBtn = ({focused, onPress, label}) => (
  <TouchableOpacity style={styles.headerBtn} {...{onPress}}>
    <Text style={[styles.headerBtnText, focused ? styles.headerBtnActive : styles.headerBtnInactive]}>{label}</Text>
  </TouchableOpacity>
);

const MovieItem = ({movie, navigation}) => (
  <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate('Movie', {movie, navigation})}>
    <Image source={{uri: movie.poster_big}} style={styles.movieItemImage} />
  </TouchableOpacity>
);

const Movies = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.data);
  const loading = useSelector(state => state.movies.loading);
  const error = useSelector(state => state.movies.error);

  useEffect(() =>{
    dispatch(getMovies());
  }, []);


  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
      <TouchableOpacity style={styles.avatarContainer}>
        <Text style={styles.avatarText}>A</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>DISCOVER</Text>
      <View style={styles.headerBtnContainer}>
        {headerBtns.map((headerBtn, i) => (
          <HeaderBtn key={`header-btn-${i}`} label={headerBtn} onPress={() => true} focused={headerBtn === 'Movies'} />
        ))}
      </View>
      {loading && <Text>Loading...</Text>}
      {movies.length === 0 && !loading && <Text>No movies available!</Text>}
      {error && !loading && <Text>{error}</Text>}
    </View>
    
    {
      movies.length > 0 && 
      <ScrollView style={styles.movieItemContainer}>
      { listToMatrix(movies, 2).map((movieRow, i) => (
        <View key={`movie-row-${i}`} style={styles.movieItemRow}>
          {movieRow.map((movie, j) => (
            <MovieItem key={`movie-item-${i}-${j}`} {...{movie, navigation}} />
          ))}
        </View>
      ))}
      </ScrollView>   
    }
    <Footer trailer={''} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ccc'},
  topContainer: {paddingHorizontal: 25, paddingTop: 20, paddingBottom: 15, justifyContent: 'center', alignItems: 'flex-end'},
  avatarContainer: {height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000075'},
  avatarText: {fontFamily: 'Inter_600SemiBold', color: '#ffffff'},
  headerContainer: {paddingHorizontal: 25},
  headerText: {fontFamily: 'Oswald_600SemiBold', fontSize: 32, color: '#000000'},
  headerBtnContainer: {flexDirection: 'row'},
  headerBtn: {marginRight: 15, marginVertical: 5},
  headerBtnText: {fontFamily: 'Inter_600SemiBold', fontSize: 12},
  headerBtnActive: {color: '#000000'},
  headerBtnInactive: {color: '#00000040'},
  movieItemContainer: {flex: 1},
  movieItemRow: {flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', paddingVertical: 5},
  movieItemImage: {width: (width - 60) / 2, height: width - 150, borderRadius: 5, overflow: 'hidden'}
});

export default Movies;