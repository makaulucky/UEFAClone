import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

type FieldPlayerProps={
    player: null;
    position: string;
}

const FielPlayer = (props: FieldPlayerProps) => {
    const {player,position}= props;
    return (
        <View>
           <FontAwesome5 name="tshirt" size={35} color={player? "#d170db" : "#5c5c5c5c" }/>
           <Text style={{
             backgroundColor:"#333333bb", 
             color:'white',
             padding:2,
             fontSize:12,
             alignItems:'center',
             paddingHorizontal:14
           }} >{position}
           </Text>
           </View>
    )
}

export default FielPlayer;
