export interface ColorTheme {
    primary: string;
    onPrimary: string;
    primaryDark: string;
    surface: string;
    onSurface: string;
    background: string;
}

export interface SpacingTheme {
    base: number;
    double: number;
}

export interface FontSizeTheme {
    xxxxsmall: number;
    xxxsmall: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    xxxlarge: number;
}

export interface IconSizeTheme {
    xxxsmall: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
}

export type reactNativeFontsWeights = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export interface FontFamilyTheme {
    regular: reactNativeFontsWeights;
    medium: reactNativeFontsWeights;
    bold: reactNativeFontsWeights;
}

export interface Theme {
    id: string;
    color: ColorTheme;
    spacing: SpacingTheme;
    fontSize: FontSizeTheme;
    fontFamily: FontFamilyTheme;
    iconSize: IconSizeTheme;
}