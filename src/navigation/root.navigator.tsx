import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {RootRoutes} from 'src/navigation/routes';
import {AuthenticationNavigator} from 'src/navigation/authentication/authentication.navigator';

const RootStack = createNativeStackNavigator()

interface RootNavigatorProps {}

export const RootNavigator: FC<RootNavigatorProps> = (props) => {

    return (
        <RootStack.Navigator screenOptions={{headerShown:false}}>
            <RootStack.Screen name={RootRoutes.AUTHENTICATION} component={AuthenticationNavigator}/>
        </RootStack.Navigator>
    );
}