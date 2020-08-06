import React from 'react';
import { FaRegHandLizard, FaRegHandPaper, FaRegHandRock, FaRegHandScissors, FaRegHandSpock } from 'react-icons/fa';
import { theme } from '../theme';

export type Status = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock';

const PlayerStatus = (status: Status) => {
  if (status === 'Rock') return <FaRegHandRock size={200} color={theme.colors.blue} />;
  if (status === 'Paper') return <FaRegHandPaper size={200} color={theme.colors.blue} />;
  if (status === 'Scissors') return <FaRegHandScissors size={200} color={theme.colors.blue} />;
  if (status === 'Lizard') return <FaRegHandLizard size={200} color={theme.colors.blue} />;
  if (status === 'Spock') return <FaRegHandSpock size={200} color={theme.colors.blue} />;
  else return null;
};

export type Result = 'Computer' | 'Player 1' | 'Tie';

const playerResult = (player1Status: Status, computerStatus: Status, nameOfPlayer: string) => {
  if (
    (computerStatus === 'Paper' && (player1Status === 'Rock' || player1Status === 'Spock')) ||
    (computerStatus === 'Scissors' && (player1Status === 'Paper' || player1Status === 'Lizard')) ||
    (computerStatus === 'Rock' && (player1Status === 'Scissors' || player1Status === 'Lizard')) ||
    (computerStatus === 'Lizard' && (player1Status === 'Spock' || player1Status === 'Paper')) ||
    (computerStatus === 'Spock' && (player1Status === 'Scissors' || player1Status === 'Rock'))
  ) {
    return 'Computer';
  } else if (
    (player1Status === 'Rock' && (computerStatus === 'Scissors' || computerStatus === 'Lizard')) ||
    (player1Status === 'Paper' && (computerStatus === 'Rock' || computerStatus === 'Spock')) ||
    (player1Status === 'Scissors' && (computerStatus === 'Paper' || computerStatus === 'Lizard')) ||
    (player1Status === 'Lizard' && (computerStatus === 'Spock' || computerStatus === 'Paper')) ||
    (player1Status === 'Spock' && (computerStatus === 'Scissors' || computerStatus === 'Rock'))
  ) {
    return nameOfPlayer;
  } else {
    return 'Tie';
  }
};

const finalResult = (scoreOfPlayer1: number, scoreOfPlayer2: number, name: string) => {
  if (scoreOfPlayer1 === scoreOfPlayer2) return 'Tie';
  else if (scoreOfPlayer2 > scoreOfPlayer1) return 'Computer';
  else return name;
};

export { PlayerStatus, playerResult, finalResult };
