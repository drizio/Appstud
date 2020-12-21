import React from "react";
import { View, Text } from "react-native";

export default function Track({ item }) {
  return (
    <>
      <Text style={{ color: !item.track.preview_url ? "gray" :"white", fontSize: 15, fontWeight: "bold" }}>
        {item.track.name}
      </Text>
      <Text style={{ color:  !item.track.preview_url ? "gray" :"white" }}>{item.track.artists[0].name}</Text>
    </>
  );
}
