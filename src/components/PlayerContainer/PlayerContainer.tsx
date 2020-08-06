import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Button, H5, H6 } from 'ui-neumorphism';
import { CustomTheme } from '../../theme';
import { useValueForTextField } from '../../utils';
import { finalResult, playerResult, PlayerStatus, Status, tactical } from '../../utils/PlayerStatus';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { CardContainer } from '../CardContainer/CardContainer';
import { NameModal } from '../NameModal/NameModal';

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
  button: {
    maxWidth: 200,
    width: '100%',
    margin: theme.spacing(1),
  },
  finalResult: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export type Mode = 'Normal' | 'Tactical';

const PlayerContainer: React.FC<PlayerContainerProps> = () => {
  const classes = useStyles();
  const [mode, setMode] = useState<Mode>('Normal');
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const [player1Status, setPlayer1Status] = useState<Status>('Rock');
  const [player2Status, setPlayer2Status] = useState<Status>('Rock');
  const [result, setResult] = useState<string>('');
  const [openNameModal, setOpenNameModal] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [scoreOfPlayer1, setScoreOfPlayer1] = useState<number>(0);
  const [scoreOfPlayer2, setScoreOfPlayer2] = useState<number>(0);
  const [name, handleName] = useValueForTextField('');
  const handleMode = () => (mode === 'Normal' ? setMode('Tactical') : setMode('Normal'));
  const handleRock = () => {
    setPlayer1Status('Rock');
    setCount(count + 1);
    initiateGame();
  };
  const handlePaper = () => {
    setPlayer1Status('Paper');
    setCount(count + 1);
    initiateGame();
  };
  const handleScissors = () => {
    setPlayer1Status('Scissors');
    setCount(count + 1);
    initiateGame();
  };

  const handleLizard = () => {
    setPlayer1Status('Lizard');
    setCount(count + 1);
    initiateGame();
  };

  const handleSpock = () => {
    setPlayer1Status('Spock');
    setCount(count + 1);
    initiateGame();
  };

  const Player1Memoized = useMemo(
    () => (
      <CardContainer inset={true} cardStyle={classes.cardContainer}>
        {PlayerStatus(player1Status as Status)}
        <H6>
          {name} : {player1Status}
        </H6>
      </CardContainer>
    ),
    [player1Status, classes.cardContainer, name],
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

  const handleNameModal = () => {
    setOpenNameModal(false);
  };

  const initiateGame = () => {
    let counter = 0;
    const gameResult: Status[] = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let gameInterval = setInterval(() => {
      counter++;
      setResult('');
      if (
        mode === 'Tactical' &&
        (playerResult(player1Status, player2Status, name) !== 'Computer' ||
          playerResult(player1Status, player2Status, name) !== 'Tie')
      ) {
        setPlayer2Status(tactical(player1Status) as Status);
      } else {
        setPlayer2Status(gameResult[Math.floor(Math.random() * gameResult.length)]);
      }

      if (playerResult(player1Status, player2Status, name) === 'Computer') {
        setScoreOfPlayer2(scoreOfPlayer2 + 1);
      } else if (playerResult(player1Status, player2Status, name) === 'Tie') {
        setScoreOfPlayer1(scoreOfPlayer1 + 0);
        setScoreOfPlayer2(scoreOfPlayer2 + 0);
      } else {
        setScoreOfPlayer1(scoreOfPlayer1 + 1);
      }

      if (counter > 20) {
        clearInterval(gameInterval);
        setResult(playerResult(player1Status, player2Status, name));
      }
    }, 100);
  };

  return (
    <div className={classes.mainContainer}>
      <NameModal visible={openNameModal} value={name} handleValue={handleName} onClose={handleNameModal} />
      <H5 className={classes.header}>
        Mode : <span className={mode === 'Normal' ? classes.greenText : classes.blueText}>{mode}</span>
      </H5>
      <div className={clsx([classes.playersContainer, isMobile && classes.playersContainerMobile])}>
        {Player1Memoized}
        {Player2Memoized}
      </div>
      {result.length > 0 && (
        <H5 className={classes.header}>
          Round {count} Winner is : {playerResult(player1Status, player2Status, name)}
        </H5>
      )}
      {count === 5 && result.length > 0 && (
        <div className={classes.finalResult}>
          <H5 className={classes.header}>Winner is : {finalResult(scoreOfPlayer1, scoreOfPlayer2, name)}</H5>
          <Button onClick={() => window.location.reload()} className={classes.button} rounded bordered>
            Play new game
          </Button>
        </div>
      )}
      <ButtonContainer
        handleRock={handleRock}
        handlePaper={handlePaper}
        handleScissors={handleScissors}
        handleTactical={handleMode}
        tacticalButtonText={mode === 'Normal' ? 'Tactical' : 'Normal'}
        handleLizard={handleLizard}
        handleSpock={handleSpock}
        count={count}
      />
    </div>
  );
};

export { PlayerContainer };
