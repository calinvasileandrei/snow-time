import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {myButtonStyle} from 'src/shared/baseComponents/myButton/myButton.style';
import {useThemeStyle} from 'src/theme/useThemeStyle.hook';

export interface MyButtonProps extends TouchableOpacityProps {
}

export const MyButton: FC<MyButtonProps> = (props) => {
    const Styles = useThemeStyle(myButtonStyle);
    return (
        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    );
};