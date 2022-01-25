import React from 'react'
import Home from '../screens/Home/Home.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />

//     </Tab.Navigator>
//   )
// }

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
      />



        
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
