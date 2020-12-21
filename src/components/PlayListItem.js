import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PlayListItem({ playlist }) {
  return (
    <TouchableOpacity onPress={()=> {
        //TODO
    }}>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: playlist.images[0].url }}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
}
