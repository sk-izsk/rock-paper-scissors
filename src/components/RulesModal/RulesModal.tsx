import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button, CardAction } from 'ui-neumorphism';
import { CustomTheme, theme } from '../../theme';
import { DialogContainer } from '../DialogContainer/DialogContainer';
import { TextContainer } from '../TextContainer/TextContainer';

export interface RulesModalProps {
  visible: boolean;
  onClose: () => void;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  btnContainer: {
    display: 'grid',
    justifyContent: 'center',
  },
  btn: {
    maxWidth: 200,
    width: '100%',
  },
  ulContainer: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    listStyleType: 'circle',
  },
}));

const listOfRules: string[] = [
  'Rock wins against scissors.',
  'Scissors win against paper.',
  'Paper wins against rock.',
];

const RulesModal: React.FC<RulesModalProps> = ({ visible, onClose }) => {
  const classes = useStyles();
  return (
    <DialogContainer
      inset={true}
      cardAction={
        <CardAction className={classes.btnContainer}>
          <Button
            bgColor={theme.colors.blue}
            color={theme.colors.white}
            onClick={onClose}
            className={classes.btn}
            rounded
          >
            Close
          </Button>
        </CardAction>
      }
      visible={visible}
      onClose={onClose}
    >
      <TextContainer header='What are the rules of RPS?'>
        Although the game has a lot of complexity to it, the rules to play it are pretty simple. The game is played
        where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The
        outcome of the game is determined by 3 simple rules:
        <ul className={classes.ulContainer}>
          {listOfRules.map((rule: string) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </TextContainer>
    </DialogContainer>
  );
};

export { RulesModal };
