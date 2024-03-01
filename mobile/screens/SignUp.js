import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import ButtonWithText from '../components/ButtonWithText';

export default function SignUp({ navigation }) {
	const [fullName, setFullName] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [phoneNumber, setPhoneNumber] = useState();

	return (
		<View style={container.main}>
			<Text style={object.header}>
				Sign Up
			</Text>

			<View style={container.body}>
				<View style={container.fields}>
					<View style={container.field}>
						<Text style={object.fieldName}>
							Full Name:
						</Text>
						<TextInput
							style={object.input}
							placeholder='John Doe'
							onChangeText={input => setFullName(input)}
						/>
					</View>

					<View style={container.field}>
						<Text style={object.fieldName}>
							Username:
						</Text>
						<TextInput
							style={object.input}
							placeholder='johndoe'
							onChangeText={input => setUsername(input)}
						/>
					</View>

					<View style={container.field}>
						<Text style={object.fieldName}>
							E-Mail:
						</Text>
						<TextInput
							style={object.input}
							placeholder='johndoe@email.com'
							onChangeText={input => setEmail(input)}
						/>
					</View>

					<View style={container.field}>
						<Text style={object.fieldName}>
							Password:
						</Text>
						<TextInput
							style={object.input}
							placeholder='********'
							onChangeText={input => setPassword(input)}
						/>
					</View>

					<View style={container.field}>
						<Text style={object.fieldName}>
							Phone Number:
						</Text>
						<View style={object.input}>
							<TextInput
								placeholder=''
								onChangeText={input => setPhoneNumber(input)}
							/>
						</View>
					</View>
				</View>

				<View style={object.signUpButton}>
					<ButtonWithText
						buttonColor='black'
						text='Sign In'
						textColor='white'
						textFontSize={15}
						action={() => navigation.navigate('Dashboard')}
					/>
				</View>

				<View style={container.otherOptions}>
					<View style={container.divider}>
						<Image
							source={require('../assets/or_with_line.png')}
							style={object.dividerLine}
						/>
						<Text style={object.dividerText}>
							or with
						</Text>
						<Image
							source={require('../assets/or_with_line.png')}
							style={object.dividerLine}
						/>
					</View>

					<View style={container.logos}>
						<TouchableOpacity>
							<Image
								source={require("../assets/apple_logo.jpg")}
								style={object.logo}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<Image
								source={require("../assets/google_logo.png")}
								style={object.logo}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<Image
								source={require("../assets/github_logo.png")}
								style={object.logo}
							/>
						</TouchableOpacity>
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
		height: '100%',
		backgroundColor: 'white',
		paddingTop: '15%', // add padding to the top
		padding: '9%', // add padding to the sides
		gap: 30,
	},
	body: {
		width: '100%',
		gap: 40,
	},
	fields: {
		display: 'flex',
		justifyContent: 'space-around',
		gap: 15,
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
	forgotPassword: {
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
	signUpButton: {
		height: '8%'
	}
});
