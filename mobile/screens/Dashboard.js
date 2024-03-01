import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Tracks from '../components/Tracks';

export default function Dashboard({ navigation }) {
	return (
		<View style={container.main}>
			<View style={container.header}>
				<TouchableOpacity onPress={() => navigation.navigate('Taskbar')}>
					<Image 
						source={require('../assets/taskbar_icon.png')} 
						style={object.dashboardIcon}
					/>
				</TouchableOpacity>

				<View style={container.profile}>
					<View style={container.profileInformation}>
						<Text style={object.fullName}>John Smith</Text>
						<Text style={object.level} >Level 5</Text>
					</View>

					<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
						<Image 
							source={require('../assets/kikirikat_logo.jpg')} 
							style={object.profilePicture}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={container.body}>
				<View style={container.headline}>
					<Text style={object.currentTrackText}>Current Tracks:</Text>

					<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
						<Image 
							source={require('../assets/add_track_icon.png')} 
							style={object.addTrackIcon}
						/>
					</TouchableOpacity>
				</View>

				<Tracks/>
			</View>
		</View>
	)
}

const container = StyleSheet.create({
	main: {
		display: 'flex',
		// justifyContent: 'space-between',
		backgroundColor: 'white',
		padding: '9%',
		paddingTop: '15%',
		height: '100%',
		gap: 60,
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	body: {
		display: 'flex',
		// gap: 30,
	},
	profile: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
	profileInformation: {
		display: 'flex',
		justifyContent: 'center'
	},
	headline: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

const object = StyleSheet.create({
	profilePicture: {
		height: 60,
		width: 60,
		borderRadius: 70,
	},
	dashboardIcon: {
		height: 32,
		width: 32
	},
	level: {
		alignSelf: 'flex-end',
		color: '#ffbf1d'
	},
	addTrackIcon: {
		height: 45,
		width: 45,
	},
	fullName: {
		fontWeight: 'bold',

	},
	currentTrackText: {
		fontWeight: 'bold',
		fontSize: 30,
	},
})