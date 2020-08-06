import React from 'react';
import { createUseStyles } from 'react-jss';
import { Body1, H6 } from 'ui-neumorphism';
import { CustomTheme } from '../../theme';

export interface TextContainerProps {
  header?: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  body: {
    textAlign: 'left',
  },
}));

const TextContainer: React.FC<TextContainerProps> = ({ header, children }) => {
  const classes = useStyles();
  return (
    <div>
      <H6 className={classes.header}>{header}</H6>
      <Body1 className={classes.body}>{children}</Body1>
    </div>
  );
};

export { TextContainer };
