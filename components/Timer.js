import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Timer = ({ initialTime }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <View>
      <Text>Remaining Time: {remainingTime}s</Text>
      <Button
        title={isRunning ? 'Pause' : 'Start'}
        onPress={() => setIsRunning(!isRunning)}
      />
    </View>
  );
};

export default Timer;
