import React, {useEffect} from 'react'
import {View, Text, FlatList, StatusBar} from 'react-native'
import {fetchApi, PLAYLIST_URL} from "../utils/"
import {useAsync} from "../hooks/query"
import {Loading, PlayListItem} from '../components/'
import { connect } from 'react-redux'
import { play, pause} from '../utils/store'

function PlayList ({play,pause, playing, currentTrack}) {

    const {data, status, error, run} = useAsync({status: 'idle'})

    useEffect(()=> {
        run(fetchApi(PLAYLIST_URL))
    }, [])

    const toggle = (currentTrack) => {
        playing ? pause() : play(currentTrack)
    }

    const renderItem = ({ item }) => (
        <PlayListItem playlist={item} />
      );
    console.log(data, status, error)
    if (status === 'idle') {
        return <Text>No playlist</Text>
      } else if (status === 'pending') {
        return <Loading />
      } else if (status === 'rejected') {
        throw error
      } else if (status === 'resolved') {
        return(<View style={{flex:1, backgroundColor: 'black', justifyContent: 'center', padding: 10}}>
            <StatusBar barStyle='dark-content' />
            <Text style={{color: 'white', fontSize: 30, textAlign: 'left', fontWeight: 'bold', marginBottom: 15, marginLeft: 10}}>{data.message}</Text>
            <FlatList 
                data={data.playlists.items}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>)
      }
}

const mapStateToProps = ({sound, playing, currentTrack}) => ({
   sound, playing,currentTrack
})
  


export default connect(
    mapStateToProps,
    { play, pause}
  )(PlayList)