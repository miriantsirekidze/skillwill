import { View, Text, Pressable, Image, StyleSheet, Linking } from 'react-native'
import React from 'react'

const Links = ({src, name, url}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
      <Pressable style={styles.container} onPress={() => Linking.openURL(url)}>
        <Image source={src} style={styles.image}/>
      </Pressable>
        <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default Links

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
  container: {
    backgroundColor: '#F2F1F9',
    height: 60, 
    width: 60, 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16, 
    fontWeight: '700',
    marginLeft: 10,
    color: '#1CB2F5',
    marginLeft: 20
  }
})