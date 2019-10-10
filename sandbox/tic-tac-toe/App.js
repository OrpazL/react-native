import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';

export default App = () => {

  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = () => {
    setGameStarted(true);
  };

  let content;

  content = gameStarted ? <GameScreen /> : <StartGameScreen onStartGame={startGameHandler} />;



  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
  }
});
