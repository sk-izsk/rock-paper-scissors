import React from 'react';
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';
import { theme } from '../theme';

export type Status = 'Rock' | 'Paper' | 'Scissors';

const PlayerStatus = (status: Status) => {
  if (status === 'Rock') return <FaRegHandRock size={200} color={theme.colors.blue} />;
  if (status === 'Paper') return <FaRegHandPaper size={200} color={theme.colors.blue} />;
  if (status === 'Scissors') return <FaRegHandScissors size={200} color={theme.colors.blue} />;
  else return null;
};

export type Result = 'Computer' | 'Player 1' | 'Tie';

const playerResult: (player1Status: Status, player2Status: Status) => Result = (
  player1Status: Status,
  player2Status: Status,
) => {
  if (
    (player1Status === 'Rock' && player2Status === 'Paper') ||
    (player1Status === 'Paper' && player2Status === 'Scissors') ||
    (player1Status === 'Scissors' && player2Status === 'Rock')
  ) {
    return 'Computer';
  } else if (
    (player1Status === 'Rock' && player2Status === 'Scissors') ||
    (player1Status === 'Paper' && player2Status === 'Rock') ||
    (player1Status === 'Scissors' && player2Status === 'Paper')
  ) {
    return 'Player 1';
  } else {
    return 'Tie';
  }
};

export { PlayerStatus, playerResult };
