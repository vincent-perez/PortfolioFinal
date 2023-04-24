// src/screens/SquatScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import LogEntry from '../components/LogEntry';
import Timer from '../components/Timer';

const SquatScreen = () => {
  const [logEntries, setLogEntries] = useState([]);

  const handleAddLog = (entry) => {
    setLogEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <View>
      <ExerciseCard
        exercise="Squat"
        alternativeExercise="Goblet Squat"
        imageSource={require('../assets/squat.jpg')}
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

export default SquatScreen;
