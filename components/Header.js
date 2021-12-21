import React from 'react'
import { View, Text } from 'react-native'
import { Button } from './Button'
import Icon from 'react-native-vector-icons/AntDesign';

function Header({title,onPress}) {
    return (
        <View style={{position:'absolute', top:40, left:48, flexDirection:'row'}}>
        <Button onPress={onPress}>
          <Icon name="left" color="white" size={16}></Icon>
        </Button>
        <Text style={{fontSize:32, fontWeight:'bold', color:'white', marginLeft:64}}>{title}</Text>
        </View>
    )
}

export default Header
