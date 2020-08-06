import React from 'react';
import { createUseStyles } from 'react-jss';
import 'ui-neumorphism/dist/index.css';
import { GameScreen } from './screens';
import { CustomTheme } from './theme';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.colors.bgColor,
      fontFamily: theme.fontProperties.fontFamily,
      scrollBehavior: 'smooth',
    },
  },
}));

const App: React.FC = () => {
  useStyles();
  return (
    <>
      <GameScreen />
    </>
  );
};

export { App };
