import { StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {}

const UserScreen: React.FC<Props> = ({}: any) => {
	return (
		<View style={styles.container}>
			<Text>UserScreen</Text>
		</View>
	)
}

export default UserScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})
