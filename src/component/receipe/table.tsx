import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { hp } from "../../shared/responsive-dimension";
import { Colors } from "../../styles";

const Table = ({ data }: any) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={{ ...styles.cell, fontWeight: "800" }}>label</Text>
        <Text style={{ ...styles.cell, fontWeight: "800" }}>
          Schema Org Tag
        </Text>
        <Text style={{ ...styles.cell, fontWeight: "800" }}>Daily</Text>
      </View>
      {data?.map((item: any, index: number) => (
        <View style={styles.row} key={index}>
          <Text style={styles.cell}>{item.label}</Text>
          <Text style={styles.cell}>{item.schemaOrgTag}</Text>
          <Text style={styles.cell}>{item.daily}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    marginTop: hp(20),
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    color: Colors.PRIMARY,
  },
});

export default Table;
