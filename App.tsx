import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import WelcomeScreen from "./screens/WelcomeScreen"
import UserScreen from "./screens/UserScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			{/* <Drawer.Navigator initialRouteName="Welcome">
				<Drawer.Screen
					name="Welcome"
					component={WelcomeScreen}
				></Drawer.Screen>
				<Drawer.Screen
					name="User"
					component={UserScreen}
				></Drawer.Screen>
			</Drawer.Navigator> */}
			<Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red" }}>
				<Tab.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons
								name="home"
								color={color}
								size={size}
							></Ionicons>
						),
					}}
				/>
				<Tab.Screen
					name="User"
					component={UserScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons
								name="person"
								color={color}
								size={size}
							></Ionicons>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
