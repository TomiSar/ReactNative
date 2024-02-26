import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = ({ taskname }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{taskname}</Text>
      </View>
      {/* <View style={styles.cirular}></View> */}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#558CF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 18,
    fontWeight: "bold",
  },
  cirular: {
    width: "auto",
    height: "auto",
    borderColor: "#558CF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
