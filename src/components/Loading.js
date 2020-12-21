import React from 'react'
import {View, Text} from 'react-native'

export default function Loading (props) {
    return (<View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text> Loading ...</Text>
    </View>)
}