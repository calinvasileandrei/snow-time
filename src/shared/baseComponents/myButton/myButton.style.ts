import {Theme} from 'src/theme/types';
import {StyleSheet} from 'react-native';

export const myButtonStyle = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            backgroundColor: theme.color.primary,
            borderRadius: theme.spacing.base,
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: theme.spacing.base,
            padding: theme.spacing.base,
        },
        buttonText: {
            color: theme.color.onPrimary,
            fontSize: theme.fontSize.medium,
            fontWeight: theme.fontFamily.medium,
            textAlign: 'center',
        },
    });
};