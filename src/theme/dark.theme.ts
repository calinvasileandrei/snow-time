import {ColorTheme, SpacingTheme, Theme} from 'src/theme/types';
import {FONT_FAMILY_THEME, FONT_SIZE_THEME, ICON_SIZE_THEME} from 'src/theme/defaults.theme';

const DARK_COLOR_THEME: ColorTheme = {
    primary: '#03a9f4',
    onPrimary: '#fff',
    primaryDark: '#0288d1',
    surface: '#545454',
    onSurface: '#fff',
    background: '#3f3f3f',
};

const DARK_SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16,
};

export const DARK_THEME_ID = 'default-dark';

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    color: DARK_COLOR_THEME,
    spacing: DARK_SPACING_THEME,
    fontSize: FONT_SIZE_THEME,
    fontFamily: FONT_FAMILY_THEME,
    iconSize: ICON_SIZE_THEME,
};