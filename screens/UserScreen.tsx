import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {}

const UserScreen: React.FC<Props> = ({ navigation }: any) => {
	const openDrawerHandler = () => {
		navigation.toggleDrawer()
	}

	return (
		<View style={styles.container}>
			<Text>UserScreen</Text>
			<Button title="Open Drawer" onPress={openDrawerHandler}></Button>
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
