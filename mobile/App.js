import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require("./assets/kikirikat_logo.jpg")}
          style={styles.image} 
        />
        <Text style={text.logo}>
          Kikirikat
        </Text>
      </View>
      <Text style={text.headline}>
        Want to build a robot?
      </Text>
      <Text style={text.headline}>
        Get Started!
      </Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Log In"
          color="#ffbf1d"
          onPress={() => alert("Log In pressed")}
        />
        <Button
          title="Sign Up"
          color="#ffbf1d"
          onPress={() => alert("Sign Up pressed")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: "100%",
  },
  headerContainer: {  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 70,
  }
});

const text = StyleSheet.create({
  logo: {
    color: "#ffbf1d",
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  headline: {
    color: 'black',
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: "bold",
  }
});
