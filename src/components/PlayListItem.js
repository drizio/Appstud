import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function PlayListItem({ playlist }) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=> {
        navigation.navigate("Details", {playlist})
    }}>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center", padding:5 }}
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
