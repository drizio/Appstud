import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { fetchApi, PLAYLIST_DETAILS_URL } from "../utils/";
import { useAsync } from "../hooks/query";
import { Loading, Track } from "../components/";
import { Audio } from "expo-av";


export default function PlayListDetails({ route }) {
  const { params } = route;
  const { playlist } = params;
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(false);

  const { data, status, error, run } = useAsync({ status: "idle" });

  async function playSound(track) {
    const { sound } = await Audio.Sound.createAsync({
      uri: track.track.preview_url,
    });
    setSound(sound);

    await sound.playAsync();
  }
  async function toggle(track) {
    playing ? await sound.pauseAsync() : await sound.playAsync(track);
  }

  useEffect(() => {
    run(fetchApi(PLAYLIST_DETAILS_URL + playlist.id));
  }, [playlist.id]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      disabled={!item.track.preview_url}
      style={{ marginVertical: 10 }}
      onPress={() => {
        if (currentTrack) {
          sound?.unloadAsync()
        }
        setCurrentTrack(item);
        setPlaying(true);
        playSound(item);
      }}
    >
      <Track item={item} />
    </TouchableOpacity>
  );
  console.log(data, status, error);
  if (status === "idle") {
    return <Text>No playlist</Text>;
  } else if (status === "pending") {
    return <Loading />;
  } else if (status === "rejected") {
    throw error;
  } else if (status === "resolved") {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <View style={{ flex: 1, backgroundColor: "green", padding: 10 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: playlist.images[0].url }}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 3 }}>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                {playlist.name}
              </Text>
              <Text style={{ color: "gray" }}>
                Playlist by {playlist.owner.display_name}
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {playlist.description}
              </Text>
              <Text style={{ color: "gray" }}>-{playlist.name}-</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 5, padding: 10 }}>
          <FlatList
            data={data.tracks.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.track.id}
          />

          {currentTrack && (
            <>
              <View
                style={{
                  borderTopWidth: 3,
                  borderTopColor: "green",
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 8 }}>
                  <Track item={currentTrack} />
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setPlaying((playing) => !playing);
                      toggle(currentTrack);
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      {playing ? "pause" : "play"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
}
