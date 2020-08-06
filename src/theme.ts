export interface CustomTheme {
  colors: {
    white: string;
    blue: string;
    grayishBlue: string;
    red: string;
    green: string;
    bgColor: string;
  };
  fontProperties: {
    textFontSize: number;
    headerFontSize: number;
    fontFamily: string;
  };
  spacing: (value: number) => number;
}

const theme: CustomTheme = {
  colors: {
    bgColor: '#E4EBF5',
    red: '	 #ff334b',
    blue: '#2196f3',
    white: '#fff',
    grayishBlue: '#8B88B1',
    green: '#00B96F',
  },
  fontProperties: {
    textFontSize: 16,
    headerFontSize: 36,
    fontFamily: ['Comic Neue', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  spacing: (value: number) => 8 * value,
};

export { theme };
