import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/kikirikat_logo.jpg")}
          style={styles.image}
        />

        <Text style={text.logo}>
          Kikirikat
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={text.headline}>
          Want to build a robot?
        </Text>

        <View style={styles.actionsContainer}>
          <Text style={text.headline}>
            Get Started!
          </Text>
          <View style={styles.buttonsContainer}>

            <View style={styles.actionButton}>
              <Button
                title='Sign Up'
                color='black'
                onPress={() => navigation.navigate('SignUp')}
              />
            </View>

            <View style={styles.actionButton}>
              <Button
                title='Log In'
                color='black'
                onPress={() => navigation.navigate('LogIn')}
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: '30%', // add padding to the top
    padding: '3%', // add padding to the sides and bottom to make headline two lines
    gap: 80,
    height: '100%'
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  actionsContainer: {
    width: '100%',
    display: 'flex',
    gap: 10,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  actionButton: {
    width: '45%',
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
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
