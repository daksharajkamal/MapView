import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { StatusBar } from "expo-status-bar";

import Hamburger from "../components/Hamburger";
import Bottom from "../components/Bottom";

class MapScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Hamburger />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <StatusBar style="auto" />
        <Bottom />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MapScreen;
