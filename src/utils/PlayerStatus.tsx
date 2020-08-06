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

export { PlayerStatus };
