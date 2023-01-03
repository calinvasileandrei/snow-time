import React, {FC} from 'react';
import {Text} from 'react-native';
import {MySafeAreaView} from 'src/shared/mySafeAreaView/mySafeAreaView.component';

export interface RegistrationScreenProps {

}

const RegistrationScreen:FC<RegistrationScreenProps> = (props) => {
    return (
        <MySafeAreaView>
            <Text>register</Text>
        </MySafeAreaView>
    );
};


export default RegistrationScreen;