import {Theme} from 'src/theme/types';
import {StyleSheet} from 'react-native';

export const loginStyle = (theme: Theme) => {
    return StyleSheet.create({
        root: {
            backgroundColor: theme.color.background,
            width: '100%',
            height: '100%',
            marginTop: theme.spacing.double,
            padding: theme.spacing.double,
        },
        infoTextWrapper: {
            flexDirection: 'row',
            marginBottom: theme.spacing.double,
        },
        infoText: {
            color: theme.color.onSurface,
            fontSize: 14,
        },
        infoTextBold: {
            fontWeight: 'bold',
        },
        buttonsWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: theme.spacing.double,
        },
        button: {
            backgroundColor: theme.color.primary,
            borderRadius: 4,
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: theme.spacing.base,
            padding: theme.spacing.base,
        },
        buttonText: {
            color: theme.color.onPrimary,
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });
};