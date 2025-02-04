import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

const SectionHeaderTwo = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="arrow-alt-circle-right" color="#7460F2" size={22}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: 'white',
    color: 'blue',
    borderRadius: 5,
    height: 60,
  },
});

export default SectionHeaderTwo;
