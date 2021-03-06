import React from 'react'
import { ImageBackground,Text, View, SafeAreaView  } from 'react-native';
import field from "../assets/images/field.jpg";
import FielPlayer from './FielPlayer';

const players:{[key:string]: null[]}={
    FWD: [null,null,null],
    MID:[null,null,null],
    DEF:[null,null,null,null],
    GK:[null],
  };
  

const Field = () => {
    return (
        <ImageBackground source={field}
      resizeMode="contain"      
       style={{width:"100%", 
        aspectRatio:2/3,
        justifyContent:'space-around',
        alignItems: 'center' }}
       >
         {Object.keys(players).map((position)=>(
         <View style={{flexDirection:'row',
          justifyContent:"space-around", 
          width:"100%"
        }}>{players[position].map((player)=>(
          <FielPlayer player={player} position={position} />
           ))}
           </View>
           ))}
       </ImageBackground>
    )
}

export default Field;
