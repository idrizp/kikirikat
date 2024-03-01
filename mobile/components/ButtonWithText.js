import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonWithText({ 
	buttonColor, 
	text, 
	textColor, 
	textFontSize,
	action 
}) {
    return (
        <TouchableOpacity 
					style={[styles.button, { backgroundColor: buttonColor }]}
					onPress={action}
				>
            <Text style={[styles.text, { color: textColor, fontSize: textFontSize }]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
	button: {
			height: '100%',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 10,
	},
	text: {
			textAlign: 'center',
	},
});