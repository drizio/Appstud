import { Audio } from "expo-av";
let music = null
export const play = track => async (dispatch, getState ) => {
    if(music) {
       await music.unloadAsync()
    }
    const { sound } = await Audio.Sound.createAsync({
        uri: track.track.preview_url,
      });
     music = sound
     music.playAsync();
    
     dispatch({
        type: 'PLAY',
        payload: track
     })
}

export const pause = () => async  (dispatch, getState ) => {
     music.pauseAsync();
     dispatch({
        type: 'PAUSE',
     })
}