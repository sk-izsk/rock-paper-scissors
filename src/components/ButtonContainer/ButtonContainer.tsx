import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from 'ui-neumorphism';
import { CustomTheme } from '../../theme';
import { RulesModal } from '../RulesModal/RulesModal';

export interface ButtonContainerProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    maxWidth: 200,
    width: '100%',
  },
}));

const ButtonContainer: React.FC<ButtonContainerProps> = () => {
  const classes = useStyles();
  const [openRuleModal, setOpenRuleModal] = useState<boolean>(false);
  const handleRuleModal = () => setOpenRuleModal(!openRuleModal);
  return (
    <div className={classes.mainContainer}>
      <RulesModal visible={openRuleModal} onClose={handleRuleModal} />
      <Button onClick={handleRuleModal} className={classes.button} rounded bordered>
        Rules
      </Button>
      <Button className={classes.button} rounded bordered>
        Rock
      </Button>
      <Button className={classes.button} rounded bordered>
        Paper
      </Button>
      <Button className={classes.button} rounded bordered>
        Scissors
      </Button>
      <Button className={classes.button} rounded bordered>
        Tactical Mode
      </Button>
    </div>
  );
};

export { ButtonContainer };
