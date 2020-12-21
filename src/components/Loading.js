import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'

export default function Loading (props) {
    return (<View style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'black'}}>
        <ActivityIndicator color="green" size='large' />
    </View>)
}