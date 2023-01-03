import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from 'src/navigation/root.navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'src/theme/theme.context';
import {LIGHT_THEME} from 'src/theme/light.theme';

export default function App() {
    const theme = LIGHT_THEME;
    return (
        <SafeAreaProvider style={{backgroundColor: '#CBD8E6'}}>
            <ThemeProvider initial={LIGHT_THEME}>
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>

    );
}
