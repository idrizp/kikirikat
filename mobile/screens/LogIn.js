import { useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import CustomizableButton from '../components/CustomizableButton';
import TextWithFont from '../components/TextWithFont';

export default function LogIn({ navigation }) {
	const [usernameEmail, setUsernameEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<View style={container.main}>
			<TextWithFont style={object.header}>Log In</TextWithFont>

			<View style={container.body}>
				<View style={container.fields}>
					<View style={container.field}>
						<TextWithFont style={object.fieldName}>Username/E-Mail:</TextWithFont>
						<TextInput
							style={object.input}
							placeholder='johndoe@email.com'
							onChangeText={input => setUsernameEmail(input)}
						/>
					</View>

					<View style={container.field}>
						<TextWithFont style={object.fieldName}>Password:</TextWithFont>
						<TextInput
							style={object.input}
							placeholder='********'
							onChangeText={input => setPassword(input)}
						/>
						<CustomizableButton style={object.forgotPasswordButton}>
							<TextWithFont style={object.forgotPasswordText}>Forgot Password?</TextWithFont>
						</CustomizableButton>
					</View>
				</View>

				<CustomizableButton
					style={object.logInButton}
					onPress={() => navigation.navigate('Dashboard')}
				>
					<TextWithFont style={object.logInButtonText}>Log In</TextWithFont>
				</CustomizableButton>

				<View style={container.otherOptions}>
					<View style={container.divider}>
						<Image
							source={require('../assets/or_with_line.png')}
							style={object.dividerLine}
						/>
						<TextWithFont style={object.dividerText}>or with</TextWithFont>
						<Image
							source={require('../assets/or_with_line.png')}
							style={object.dividerLine}
						/>
					</View>

					<View style={container.logos}>
						<CustomizableButton onPress={() => navigation.navigate('Dashboard')}>
							<Image
								source={require("../assets/apple_logo.jpg")}
								style={object.logo}
							/>
						</CustomizableButton>

						<CustomizableButton onPress={() => navigation.navigate('Dashboard')}>
							<Image
								source={require("../assets/google_logo.png")}
								style={object.logo}
							/>
						</CustomizableButton>

						<CustomizableButton onPress={() => navigation.navigate('Dashboard')}>
							<Image
								source={require("../assets/github_logo.png")}
								style={object.logo}
							/>
						</CustomizableButton>
					</View>
				</View>
			</View>
		</View>
	);
}

const container = StyleSheet.create({
	main: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '30%', // add padding to the top
		padding: '9%', // add padding to the sides
		gap: 80,
	},
	body: {
		width: '100%',
		gap: 40,
	},
	fields: {
		height: '40%',
		display: 'flex',
		justifyContent: 'space-around',
		gap: 35
	},
	field: {
		display: 'flex',
		gap: 5,
	},
	otherOptions: {
		display: 'flex',
		gap: 15,
	},
	divider: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	logos: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%'
	}
});

const object = StyleSheet.create({
	header: {
		color: 'black',
		fontSize: 40,
		fontFamily: "Roboto",
		fontWeight: 'bold',
		textAlign: 'center',
	},
	forgotPasswordButton: {
		alignSelf: 'flex-start'
	},
	forgotPasswordText: {
		color: "#ffbf1d",
	},
	input: {
		borderWidth: 1,
		borderRadius: 10,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
	},
	logo: {
		width: 50,
		height: 50,
	},
	logInButton: {
		backgroundColor: 'black',
		borderRadius: 10,
		padding: 10
	},
	logInButtonText: {
		color: 'white',
		fontSize: 15
	}
});
