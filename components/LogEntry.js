// src/components/LogEntry.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LogEntry = ({ onAddLog, selectedExercise }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = () => {
    onAddLog({ exercise: selectedExercise, weight, reps });
    setWeight('');
    setReps('');
  };

  return (
    <View>
      <TextInput
        placeholder="Weight (lbs)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        placeholder="Reps"
        keyboardType="numeric"
        value={reps}
        onChangeText={setReps}
      />
      <Button title="Add Log" onPress={handleSubmit} />
    </View>
  );
};

export default LogEntry;
