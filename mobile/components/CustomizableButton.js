import { TouchableOpacity, StyleSheet } from 'react-native';
import TextWithFont from './TextWithFont';

export default function CustomizableButton({ style, onPress, children }) {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 'max-content',
		width: 'max-content'
	},
	text: {
		textAlign: 'center'
	}
})