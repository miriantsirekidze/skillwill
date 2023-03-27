import { useCallback } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Links from './components/Links';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Avenir: require("./assets/fonts/avenir95-black-oblique.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1, backgroundColor: "#F2F1F9" }}>
      <StatusBar style="light" />
      <View style={styles.header} onLayout={onLayoutRootView}>
        <View>
          <Text style={styles.headerText}>sk:llw:ll</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.profileContainer}>
          <Image source={require('./img/cat.jpg')} style={styles.profile}/>
          <Text style={styles.name}>Mirian Tsirekidze</Text>
          <View style={styles.socialMedia}>
            <Links src={require('./img/github.png')} name={'https://www.github.com/miriantsirekidze'} url={'https://www.github.com/miriantsirekidze'}/>
            <Links src={require('./img/linkedin.png')} name={'https://www.linkedin.com/in/miriantsirekidze'} url={'https://www.linkedin.com/in/miriantsirekidze'}/>
            <Links src={require('./img/gmail.png')} name={'miriani.tsirekidze@gmail.com'} url={'https://mail.google.com/mail/?view=cm&fs=1&to=miriani.tsirekidze@gmail.com'}/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#5946d4",
    height: "15%",
    width: "100%",
    elevation: 5,
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Avenir",
    color: "white",
    fontSize: 30,
    marginTop: 15,
    marginLeft: 15,
  },
  profileContainer: {
    height: "80%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
    padding: 20
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Avenir', 
    marginTop: 10,
    marginBottom: 20
  }
});
