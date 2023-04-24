// src/screens/DeadliftScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import LogEntry from '../components/LogEntry';
import Timer from '../components/Timer';

const DeadliftScreen = () => {
  const [logEntries, setLogEntries] = useState([]);

  const handleAddLog = (entry) => {
    setLogEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <View>
      <ExerciseCard
        exercise="Deadlift"
        alternativeExercise="Romanian Deadlift"
        imageSource={require('../assets/deadlift.jpg')}
      />
      <Image
        source={require('../assets/rdl.jpg')}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
        }}
      />
      <LogEntry onAddLog={handleAddLog} />
      <FlatList
        data={logEntries}
        renderItem={({ item }) => (
          <Text>
            {item.exercise}: {item.weight} lbs - {item.reps} reps
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Timer initialTime={60} />
    </View>
  );
};

export default DeadliftScreen;
