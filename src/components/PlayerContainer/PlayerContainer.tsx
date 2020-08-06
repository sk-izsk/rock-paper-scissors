import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { H5, H6 } from 'ui-neumorphism';
import { CustomTheme } from '../../theme';
import { playerResult, PlayerStatus, Status } from '../../utils/PlayerStatus';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { CardContainer } from '../CardContainer/CardContainer';

export interface PlayerContainerProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0.2fr 3fr 0.2fr 1fr',
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

export type Mode = 'Normal' | 'Tactical';

const PlayerContainer: React.FC<PlayerContainerProps> = () => {
  const classes = useStyles();
  const [mode, setMode] = useState<Mode>('Normal');
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const [player1Status, setPlayer1Status] = useState<Status>('Rock');
  const [player2Status, setPlayer2Status] = useState<Status>('Rock');
  const [showResult, setShowResult] = useState<boolean>(false);
  const handleMode = () => (mode === 'Normal' ? setMode('Tactical') : setMode('Normal'));
  const handleRock = () => {
    setPlayer1Status('Rock');
    initiateGame();
  };
  const handlePaper = () => {
    setPlayer1Status('Paper');
    initiateGame();
  };
  const handleScissors = () => {
    setPlayer1Status('Scissors');
    initiateGame();
  };

  const Player1Memoized = useMemo(
    () => (
      <CardContainer inset={true} cardStyle={classes.cardContainer}>
        {PlayerStatus(player1Status as Status)}
        <H6>Player 1 : {player1Status}</H6>
      </CardContainer>
    ),
    [player1Status, classes.cardContainer],
  );

  const Player2Memoized = useMemo(
    () => (
      <CardContainer inset={true} cardStyle={classes.cardContainer}>
        {PlayerStatus(player2Status)}
        <H6>Computer : {player2Status}</H6>
      </CardContainer>
    ),
    [player2Status, classes.cardContainer],
  );

  const initiateGame = () => {
    let counter = 0;
    const gameResult: Status[] = ['Rock', 'Paper', 'Scissors'];
    let gameInterval = setInterval(() => {
      counter++;
      setShowResult(false);
      setPlayer2Status(gameResult[Math.floor(Math.random() * gameResult.length)]);
      if (counter > 20) {
        clearInterval(gameInterval);
        setShowResult(true);
      }
    }, 100);
  };

  console.log('this is player status', player1Status, player2Status, playerResult(player1Status, player2Status));

  return (
    <div className={classes.mainContainer}>
      <H5 className={classes.header}>
        Mode : <span className={mode === 'Normal' ? classes.greenText : classes.blueText}>{mode}</span>
      </H5>
      <div className={clsx([classes.playersContainer, isMobile && classes.playersContainerMobile])}>
        {Player1Memoized}
        {Player2Memoized}
      </div>
      {showResult && <H5 className={classes.header}>Winner is : {playerResult(player1Status, player2Status)}</H5>}
      <ButtonContainer
        handleRock={handleRock}
        handlePaper={handlePaper}
        handleScissors={handleScissors}
        handleTactical={handleMode}
        tacticalButtonText={mode === 'Normal' ? 'Tactical' : 'Normal'}
      />
    </div>
  );
};

export { PlayerContainer };
