// src/screens/BenchPressScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import LogEntry from '../components/LogEntry';
import Timer from '../components/Timer';

const BenchPressScreen = () => {
  const [logEntries, setLogEntries] = useState([]);

  const handleAddLog = (entry) => {
    setLogEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <View>
      <ExerciseCard
        exercise="Bench Press"
        alternativeExercise="Dumbbell Bench Press"
        imageSource={require('../assets/bench_press.jpg')}
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

export default BenchPressScreen;
