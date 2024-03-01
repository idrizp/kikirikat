import { StyleSheet, Text, Platform } from "react-native";

export default function TextWithFont({ style, children }) {
	return (
		<Text style={[styles.text, style]}>{children}</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		fontFamily: Platform.select({
			android: 'Inter_100Thin',
			ios: 'Inter-Thin',
		})
	}
})