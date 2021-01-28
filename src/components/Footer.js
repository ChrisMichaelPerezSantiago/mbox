import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const renderTailerPlay = (trailer) => {
  if(!trailer)
    return null
  else
    return (
      <TouchableOpacity style={styles.playBtn}>
        <Image source={require('../../assets/icons/play.png')} style={styles.playIcon} />
      </TouchableOpacity>
    )
}

const Footer = ({trailer}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.itemContainer}>
      <Image style={styles.image} source={require('../../assets/icons/dashboard.png')} />
    </TouchableOpacity>
    {renderTailerPlay(trailer)}
    <TouchableOpacity style={styles.itemContainer}>
      <Image style={styles.image} source={require('../../assets/icons/search.png')} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', backgroundColor: '#00000090', paddingHorizontal: 50, justifyContent: 'space-between', position: 'relative', zIndex: 8},
  itemContainer: {padding: 20},
  image: {height: 24, width: 24},
  playIcon: {height: 16, width: 16},
  playBtn: {backgroundColor: '#ffba00', borderRadius: 15, height: 48, width: 48, position: 'relative', zIndex: 9, bottom: 20, left: 0, justifyContent: 'center', alignItems: 'center'}
})

export default Footer;