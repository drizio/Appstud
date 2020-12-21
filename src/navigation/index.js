import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PlayList, PlayListDetails } from "../containers/";

const Stack = createStackNavigator();


export default function Router() {
  return (<NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={PlayList} />
        <Stack.Screen name="Details" component={PlayListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
