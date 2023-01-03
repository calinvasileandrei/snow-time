import {ColorTheme, SpacingTheme, Theme} from 'src/theme/types';
import {FONT_FAMILY_THEME, FONT_SIZE_THEME, ICON_SIZE_THEME} from 'src/theme/defaults.theme';

const LIGHT_COLOR_THEME: ColorTheme = {
    primary: '#03a9f4',
    onPrimary: '#fff',
    primaryDark: '#0288d1',
    surface: '#fff',
    onSurface: '#000',
    background: '#CBD8E6',
};

const LIGHT_SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16,
};

export const LIGHT_THEME_ID = 'default-light';

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    color: LIGHT_COLOR_THEME,
    spacing: LIGHT_SPACING_THEME,
    fontSize: FONT_SIZE_THEME,
    fontFamily: FONT_FAMILY_THEME,
    iconSize: ICON_SIZE_THEME,
};