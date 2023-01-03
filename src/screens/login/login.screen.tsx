import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {MySafeAreaView} from 'src/shared/mySafeAreaView/mySafeAreaView.component';
import {useThemeStyle} from 'src/theme/useThemeStyle.hook';
import {loginStyle} from 'src/screens/login/login.style';
import {MyButton} from 'src/shared/baseComponents/myButton/myButton.component';

export interface LoginScreenProps {}

const LoginScreen:FC<LoginScreenProps> = (props) => {
    const Styles = useThemeStyle(loginStyle);

    return (
        <MySafeAreaView>
            <View style={Styles.root}>
                <Text>LoginScreen</Text>
                <MyButton>Ciao</MyButton>
            </View>
        </MySafeAreaView>
    );
};

export default LoginScreen;