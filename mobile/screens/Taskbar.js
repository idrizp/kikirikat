import { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import ButtonWithText from "../components/ButtonWithText";

export default function Taskbar({ navigation }) {
	return (
		<View style={container.main}>
			<View style={container.header}>
				<Image
					source={require('../assets/kikirikat_logo.jpg')}
					style={object.icon}
				/>

				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={require('../assets/close_taskbar_icon.png')}
						style={object.icon}
					/>
				</TouchableOpacity>
			</View>

			<View style={container.options}>
				<View style={container.option}>
					<ButtonWithText
						buttonColor='#FFDF36'
						text='Dashboard'
						textColor='black'
						textFontSize={25}
						action={() => navigation.navigate('Dashboard')}
					/>
				</View>

				<View style={container.option}>
					<ButtonWithText
						buttonColor='#FFDF36'
						text='Profile'
						textColor='black'
						textFontSize={25}
						action={() => navigation.navigate('Profile')}
					/>
				</View>

				<View style={container.option}>
					<ButtonWithText
						buttonColor='#FFDF36'
						text='Change Language'
						textColor='black'
						textFontSize={25}

					/>
				</View>

				<View style={container.option}>
					<ButtonWithText
						buttonColor='#FFDF36'
						text='Settings'
						textColor='black'
						textFontSize={25}

					/>
				</View>

				<View style={container.option}>
					<ButtonWithText
						buttonColor='#FFDF36'
						text='Log Out'
						textColor='black'
						textFontSize={25}
					/>
				</View>
			</View>
		</View>
	)
}

const container = StyleSheet.create({
	main: {
		display: 'flex',
		height: '100%',
		backgroundColor: '#1E1E1E',
		padding: '9%'
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	options: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20
	},
	option: {
		height: '7%',
		width: '80%'
	}
});

const object = StyleSheet.create({
	icon: {
		height: 50,
		width: 50,
		borderRadius: 70
	}
});