import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './styles'; // Assuming you have styles for your header

const CustomHeader = ({ onMenuPress }) => {
  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButtonContainer}>
        {/* Sandwich icon must be inside <Text> */}
        <Text style={styles.menuButton}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Simplus Scanner</Text>
    </Appbar.Header>
  );
};

export default CustomHeader;
