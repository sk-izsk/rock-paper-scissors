import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button, CardAction, H5, TextField } from 'ui-neumorphism';
import { DialogContainer } from '..';
import { CustomTheme, theme } from '../../theme';

export interface NameModalProps {
  visible: boolean;
  onClose?: () => void;
  value: string;
  handleValue: () => void;
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
  inputContainer: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
}));

const NameModal: React.FC<NameModalProps> = ({ visible, onClose, value, handleValue }) => {
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
            disabled={value.length === 0 ? true : false}
          >
            Enter
          </Button>
        </CardAction>
      }
      visible={visible}
    >
      <H5>Enter your Name</H5>
      <TextField
        className={classes.inputContainer}
        width={400}
        placeholder="Make sure its a string, becoz I didn't use validator.😛"
        value={value}
        onChange={handleValue}
        type='text'
      />
    </DialogContainer>
  );
};

export { NameModal };
