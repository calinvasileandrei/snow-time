import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationRoutes} from 'src/navigation/routes';
import {LoginNavigator} from 'src/navigation/authentication/login/login.navigator';
import {RegistrationNavigator} from 'src/navigation/authentication/registeration/registrationNavigator';

const AuthenticationStack = createNativeStackNavigator()

export const AuthenticationNavigator = () => {

    return (
        <AuthenticationStack.Navigator screenOptions={{headerShown:false}}>
            <AuthenticationStack.Screen name={AuthenticationRoutes.LOGIN_STACK} component={LoginNavigator}/>
            <AuthenticationStack.Screen name={AuthenticationRoutes.REGISTRATION_STACK} component={RegistrationNavigator}/>
        </AuthenticationStack.Navigator>
    )
}
