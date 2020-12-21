import React, {useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import {fetchApi, PLAYLIST_URL} from "../utils/"
import {useAsync} from "../hooks/query"
import {Loading, PlayListItem} from '../components/'

export default function Playlist (props) {

    const {data, status, error, run} = useAsync({status: 'idle'})

    useEffect(()=> {
        run(fetchApi(PLAYLIST_URL))
    }, [])

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
        return(<View style={{flex:1, backgroundColor: 'black',}}>
            <Text style={{color: 'white', fontSize: 20}}>{data.message}</Text>
            <FlatList 
                style={{borderColor: 'red', borderWidth: 3}}
                data={data.playlists.items}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>)
      }
}