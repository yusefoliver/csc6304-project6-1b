import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

export default function App() {
  const [diceRoll, setDiceRoll] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(randomNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Dice Roll:</Text>
      </View>

      <View style={styles.center}>
        <Text style={styles.number}>{diceRoll}</Text>
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={rollDice}>
          <Text style={styles.buttonText}>ROLL DICE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  top: {
    alignItems: 'center',
    marginTop: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6200EE', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
