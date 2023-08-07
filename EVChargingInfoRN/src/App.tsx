import {ThemeProvider, Header, Input, SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {theme} from './theme';
import {Chargers} from './Chargers/Chargers';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Header
          leftComponent={{
            icon: 'menu',
          }}
          rightComponent={<></>}
          centerComponent={{text: 'Chargers', style: styles.heading}}
        />
        <Chargers />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
