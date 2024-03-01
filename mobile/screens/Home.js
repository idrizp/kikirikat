import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import CustomizableButton from '../components/CustomizableButton';
import TextWithFont from '../components/TextWithFont';

export default function Home({ navigation }) {
  return (
    <View style={container.main}>

      <View style={container.header}>
        <Image
          source={require("../assets/kikirikat_logo.jpg")}
          style={object.image}
        />

        <TextWithFont style={object.appName}>Kikirikat</TextWithFont>
      </View>

      <View style={container.body}>
        <TextWithFont style={object.headline}>Want to build a robot?</TextWithFont>

        <View style={container.actions}>
          <TextWithFont style={object.headline}>Get Started!</TextWithFont>
          <View style={container.buttons}>

              <CustomizableButton
                style={object.button}
                onPress={() => navigation.navigate('SignUp')}
              >
                <TextWithFont style={object.buttonText}>Sign Up</TextWithFont>
              </CustomizableButton>

              <CustomizableButton
                style={object.button}
                onPress={() => navigation.navigate('LogIn')}
              >
                <TextWithFont style={object.buttonText}>Log In</TextWithFont>
              </CustomizableButton>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const container = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '30%', // add padding to the top
    padding: '3%', // add padding to the sides and bottom to make headline two lines
    gap: 80,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  actions: {
    width: '100%',
    display: 'flex',
    gap: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
});

const object = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  appName: {
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
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10, 
    width: '45%',
  }
});
