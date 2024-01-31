import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClassScreen from './ClassScreen';
import { Colors, Text, View } from 'react-native-ui-lib';
import CustomBottomNavigationBar from '../lib/BottomNavigationBar';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
	return (
		<Tab.Navigator tabBar={props => <CustomBottomNavigationBar {...props} />} initialRouteName='Class'>
			<Tab.Screen name="Home" component={() => (
				<View>
					<Text h1>Home</Text>
				</View>
			)} />
			<Tab.Screen name="Solo" component={() => (
				<View>
					<Text h1>Solo</Text>
				</View>
			)} />
			<Tab.Screen
				name="Class"
				component={ClassScreen}
				options={{
					headerTitle: "Find Live Classes",
					headerStyle: {
            backgroundColor: Colors.surface,
						shadowOffset: 0,
          },
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: 700,
						color: Colors.textColor
					},
				}}
			/>
			<Tab.Screen name="Profile" component={() => (
				<View>
					<Text h1>Profile</Text>
				</View>
			)} />
		</Tab.Navigator>
	);
}

export {
	MainBottomTabNavigator
}