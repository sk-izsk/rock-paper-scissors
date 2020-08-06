import React from 'react';
import { createUseStyles } from 'react-jss';
import { PlayerContainer } from '../../components';
import { CustomTheme } from '../../theme';

export interface GameScreenProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    height: '100vh',
    width: '100vw',
  },
}));

const GameScreen: React.FC<GameScreenProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <PlayerContainer />
    </div>
  );
};

export { GameScreen };
