import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

export default function LogIn() {
	const [usernameEmail, setUsernameEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<View style={container.main}>
			<Text style={items.header}>
				Log In
			</Text>

			<View style={container.body}>
				<View style={container.fields}>
					<View style={container.field}>
						<Text style={items.fieldName}>
							Username/E-Mail:
						</Text>
						<TextInput
							style={items.input}
							placeholder='johndoe@email.com'
							onChangeText={input => setUsernameEmail(input)}
						/>
					</View>

					<View style={container.field}>
						<Text style={items.fieldName}>
							Password:
						</Text>
						<TextInput
							style={items.input}
							placeholder='********'
							onChangeText={input => setPassword(input)}
						/>
						<TouchableOpacity>
							<Text style={items.forgotPassword}>
								Forgot Password?
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={container.logInButton}>
					<Button
						title='Log In'
						color='black'
					/>
				</View>

				<View style={container.otherOptions}>
					<View style={container.divider}>
						<Image
							source={require('../assets/or_with_line.png')}
							style={items.dividerLine}
						/>
						<Text style={items.dividerText}>
							or with
						</Text>
						<Image
							source={require('../assets/or_with_line.png')}
							style={items.dividerLine}
						/>
					</View>

					<View style={container.logos}>
						<TouchableOpacity>
							<Image
								source={require("../assets/apple_logo.jpg")}
								style={items.logo}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<Image
								source={require("../assets/google_logo.png")}
								style={items.logo}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<Image
								source={require("../assets/github_logo.png")}
								style={items.logo}
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

const items = StyleSheet.create({
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
	logInButton: {
		borderRadius: 10,
	}
});
