import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const Bottom = () => {
  const navigation = useNavigation();
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "#3f5ebc",
        padding: 16,
        height: 550,
        zIndex: 1,
      }}
    >
      <Text style={styles.headline}>Choose your Airport</Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => navigation.navigate("DestinationScreen", { data: 1 })}
        >
          <Text style={styles.destination}>Destination 1</Text>
          <Text style={styles.price}>from 499</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => navigation.navigate("DestinationScreen", { data: 2 })}
        >
          <Text style={styles.destination}>Destination 2</Text>
          <Text style={styles.price}>from 499</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => navigation.navigate("DestinationScreen", { data: 3 })}
        >
          <Text style={styles.destination}>Destination 3</Text>
          <Text style={styles.price}>from 499</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[550, 450, 300]}
        borderRadius={35}
        renderContent={renderContent}
        enabledInnerScrolling="false"
      />
    </>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: "white",
    margin: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 15,
    borderRadius: 35,
  },
  destination: {
    fontSize: 20,
    fontWeight: "700",
  },
  price: {
    fontSize: 15,
  },
});
export default Bottom;
