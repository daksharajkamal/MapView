import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Hamburger from "../components/Hamburger";
import { useNavigation } from "@react-navigation/native";

const Destination = ({ route: { params } }) => {
  const [value, onChangeText] = React.useState("");
  const { data } = params;
  return (
    <View style={styles.container}>
      <Hamburger />
      <View style={styles.components}>
        <TextInput
          style={styles.input}
          placeholder="Pick-Up Address"
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Text style={styles.destinationText}>Destination {data}</Text>
      </View>
      <View style={styles.nextContainer}>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f5ebc",
  },
  components: {
    alignSelf: "center",
    top: 200,
    width: 350,
  },
  input: {
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  },
  destinationText: {
    fontWeight: "700",
    fontSize: 16,
    padding: 15,
    backgroundColor: "white",
    margin: 10,
  },
  nextContainer: {
    position: "absolute",
    bottom: 0,
  },
  buttonNext: {
    height: 55,
    width: 300,
    backgroundColor: "#8de2b2",
    borderRadius: 100,
    justifyContent: "center",
    margin: 60,
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center",
  },
});
export default Destination;
