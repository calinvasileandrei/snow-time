import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationRoutes} from 'src/navigation/routes';
import RegistrationScreen from 'src/screens/registration/registration.screen';

const RegistrationStack = createNativeStackNavigator()

export const RegistrationNavigator = () => {

    return (
        <RegistrationStack.Navigator screenOptions={{headerShown:false}}>
            <RegistrationStack.Screen name={AuthenticationRoutes.REGISTRATION_SCREEN} component={RegistrationScreen}/>
        </RegistrationStack.Navigator>
    )
}
