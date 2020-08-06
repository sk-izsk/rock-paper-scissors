import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';

export interface PlayerContainerProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '3fr 1fr',
  },
}));

const PlayerContainer: React.FC<PlayerContainerProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div>this is player container</div>
      <ButtonContainer />
    </div>
  );
};

export { PlayerContainer };
