import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const GenderElement = styled(TouchableOpacity)`
  backgroundColor: ${(props) => (props.isSelected ? "#904e95" : "white")};
  borderRadius: 15;
  minHeight:36;
  justifyContent:center;
  padding: ${(props) => props.padding || "8"}px;
  minWidth:64px;
`;

export function SegmentSelect({
  data,
  selectedValue,
  setSelectedValue,
  width,
}) {
  return (
    <View style={{ width, flexDirection:'row', justifyContent:'space-evenly' }}>
      {data.map((value) => (
        <GenderElement
          key={value}
          onPress={() => {
            setSelectedValue(value === selectedValue? '': value);
          }}
          isSelected={value === selectedValue}
        >
          <Text style={{ textTransform: "capitalize", textAlign:'center', color: value !== selectedValue ?  "black" : "white" }}>{value}</Text>
        </GenderElement>
      ))}
    </View>
  );
}
