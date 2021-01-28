import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts as useInterFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts as useOswaldFonts, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import Navigation from './Navigation';

export default () => {
  let [interFontsLoaded] = useInterFonts({
    Inter_400Regular, Inter_600SemiBold
  });

  let [oswaldFontsLoaded] = useOswaldFonts({
    Oswald_600SemiBold
  });

  if (!interFontsLoaded || !oswaldFontsLoaded)
    return <AppLoading />;
  else
    return (
      <>
        <StatusBar translucent={false} style='light' />
        <Navigation />
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
