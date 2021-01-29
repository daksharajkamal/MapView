import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
function Hamburger() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => alert("Menu will be shown")}>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    right: 40,
    top: 60,
    zIndex: 1,
  },
});
export default Hamburger;
