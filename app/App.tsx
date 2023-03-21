import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './modules';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
