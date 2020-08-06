import React, { useState } from 'react';
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
import { Button } from 'ui-neumorphism';
import { CustomTheme, theme } from '../../theme';
import { RulesModal } from '../RulesModal/RulesModal';

export interface ButtonContainerProps {
  handleTactical?: () => void;
  tacticalButtonText?: string;
  handleRock?: () => void;
  handlePaper?: () => void;
  handleScissors?: () => void;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    maxWidth: 200,
    width: '100%',
    margin: theme.spacing(1),
  },
  internalButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  handleTactical,
  tacticalButtonText,
  handlePaper,
  handleRock,
  handleScissors,
}) => {
  const classes = useStyles();
  const [openRuleModal, setOpenRuleModal] = useState<boolean>(false);
  const handleRuleModal = () => setOpenRuleModal(!openRuleModal);

  return (
    <div className={classes.mainContainer}>
      <RulesModal visible={openRuleModal} onClose={handleRuleModal} />
      <Button onClick={handleRuleModal} className={classes.button} rounded bordered>
        Rules
      </Button>
      <Button onClick={handleRock} className={classes.button} rounded bordered>
        <FaRegHandRock className={classes.icon} size={20} color={theme.colors.blue} />
        Rock
      </Button>
      <Button onClick={handlePaper} className={classes.button} rounded bordered>
        <FaRegHandPaper className={classes.icon} size={20} color={theme.colors.blue} />
        Paper
      </Button>
      <Button onClick={handleScissors} className={classes.button} rounded bordered>
        <FaRegHandScissors className={classes.icon} size={20} color={theme.colors.blue} />
        Scissors
      </Button>
      <Button onClick={handleTactical} className={classes.button} rounded bordered>
        {tacticalButtonText} Mode
      </Button>
    </div>
  );
};

export { ButtonContainer };
