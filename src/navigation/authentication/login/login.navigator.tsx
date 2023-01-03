import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationRoutes} from 'src/navigation/routes';
import LoginScreen from 'src/screens/login/login.screen';

const LoginStack = createNativeStackNavigator()

export const LoginNavigator = () => {

    return (
        <LoginStack.Navigator screenOptions={{headerShown:false}}>
            <LoginStack.Screen name={AuthenticationRoutes.LOGIN_SCREEN} component={LoginScreen}/>
        </LoginStack.Navigator>
    )
}
