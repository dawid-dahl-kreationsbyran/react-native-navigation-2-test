import { StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {}

const WelcomeScreen: React.FC<Props> = ({}: any) => {
	return (
		<View style={styles.container}>
			<Text>WelcomeScreen</Text>
		</View>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})
