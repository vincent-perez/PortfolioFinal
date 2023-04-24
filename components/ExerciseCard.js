import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native';

const ExerciseCard = ({ exercise, alternativeExercise, imageSource}) => {
  const [selectedExercise, setSelectedExercise] = useState(exercise);

  return (
    <View>
      <Text>{selectedExercise}</Text>
            <Image
        source={imageSource}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
        }}
      />
      <Switch
        value={selectedExercise === alternativeExercise}
        onValueChange={() => {
          setSelectedExercise(
            selectedExercise === exercise ? alternativeExercise : exercise
          );
        }}
      />
    </View>
  );
};

export default ExerciseCard;
