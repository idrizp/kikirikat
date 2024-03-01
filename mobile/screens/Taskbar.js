import { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import CustomizableButton from "../components/CustomizableButton";
import TextWithFont from "../components/TextWithFont";

export default function Taskbar({ navigation }) {
	return (
		<View style={container.main}>
			<View style={container.header}>
				<Image
					source={require('../assets/kikirikat_logo.jpg')}
					style={object.icon}
				/>

				<CustomizableButton onPress={() => navigation.goBack()}>
					<Image
						source={require('../assets/close_taskbar_icon.png')}
						style={object.icon}
					/>
				</CustomizableButton>
			</View>

			<View style={container.options}>
				<CustomizableButton
					style={object.option}
					onPress={() => navigation.navigate('Dashboard')}
				>
					<TextWithFont style={object.optionText}>Dashboard</TextWithFont>
				</CustomizableButton>

				<CustomizableButton
					style={object.option}
					onPress={() => navigation.navigate('Profile')}
				>
					<TextWithFont style={object.optionText}>Profile</TextWithFont>
				</CustomizableButton>

				<CustomizableButton
					style={object.option}
					onPress={() => navigation.navigate('ChangeLanguage')}
				>
					<TextWithFont style={object.optionText}>Change Language</TextWithFont>
				</CustomizableButton>

				<CustomizableButton
					style={object.option}
					onPress={() => navigation.navigate('Settings')}
				>
					<TextWithFont style={object.optionText}>Settings</TextWithFont>
				</CustomizableButton>

				<CustomizableButton
					style={object.option}
					onPress={() => navigation.navigate('Home')}
				>
					<TextWithFont style={object.optionText}>Log Out</TextWithFont>
				</CustomizableButton>
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
});

const object = StyleSheet.create({
	icon: {
		height: 50,
		width: 50,
		borderRadius: 70
	},
	option: {
		backgroundColor: '#FFDF36',
		height: '7%',
		width: '80%',
		borderRadius: 10
	},
	optionText: {
		color: 'black',
		fontSize: 25
	}
});