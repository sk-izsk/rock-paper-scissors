import clsx from 'clsx';
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { H5, H6 } from 'ui-neumorphism';
import { CustomTheme } from '../../theme';
import { PlayerStatus, Status } from '../../utils/PlayerStatus';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { CardContainer } from '../CardContainer/CardContainer';

export interface PlayerContainerProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0.2fr 3fr 1fr',
  },
  playersContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    padding: theme.spacing(2),
  },
  playersContainerMobile: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr',
  },
  cardContainer: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
  },
  blueText: {
    color: theme.colors.blue,
  },
  greenText: {
    color: theme.colors.green,
  },
}));

const PlayerContainer: React.FC<PlayerContainerProps> = () => {
  const classes = useStyles();
  const [mode, setMode] = useState<'Normal' | 'Tactical'>('Normal');
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const [player1Status, setPlayer1Status] = useState<Status>('Rock');
  const [player2Status, setPlayer2Status] = useState<Status>('Rock');
  const handleMode = () => (mode === 'Normal' ? setMode('Tactical') : setMode('Normal'));
  const handleRock = () => setPlayer1Status('Rock');
  const handlePaper = () => setPlayer1Status('Paper');
  const handleScissors = () => setPlayer1Status('Scissors');

  return (
    <div className={classes.mainContainer}>
      <H5 className={classes.header}>
        Mode : <span className={mode === 'Normal' ? classes.greenText : classes.blueText}>{mode}</span>
      </H5>
      <div className={clsx([classes.playersContainer, isMobile && classes.playersContainerMobile])}>
        <CardContainer inset={true} cardStyle={classes.cardContainer}>
          {PlayerStatus(player1Status as Status)}
          <H6>Player 1 : Rock</H6>
        </CardContainer>
        <CardContainer inset={true} cardStyle={classes.cardContainer}>
          {PlayerStatus(player2Status)}
          <H6>Computer : Rock</H6>
        </CardContainer>
      </div>
      <ButtonContainer
        handleRock={handleRock}
        handlePaper={handlePaper}
        handleScissors={handleScissors}
        handleTactical={handleMode}
        tacticalButtonText={mode}
      />
    </div>
  );
};

export { PlayerContainer };
