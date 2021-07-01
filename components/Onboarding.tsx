import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Slide from '../assets/Slide'

const styles=StyleSheet.create({
    container: {
        flex:1,
    },
    slider: {
        flex:0.61,
    },
    footer: {
        flex:1,
    },
})

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <View styles={styles.slider}>
                <ScrollView>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                </ScrollView>

            </View>
            <View style={styles.footer}/>
        </View>
    )
}

export default Onboarding
