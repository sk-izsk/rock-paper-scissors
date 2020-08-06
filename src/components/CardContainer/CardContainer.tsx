import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card, CardContent } from 'ui-neumorphism';
import { CustomTheme } from '../../theme';

export interface CardContainerProps {
  inset?: boolean;
  cardAction?: JSX.Element;
  cardContentStyle?: string;
  cardStyle?: string;
  cardLoading?: boolean;
  cardBordered?: boolean;
}
const useStyles = createUseStyles((theme: CustomTheme) => ({
  card: {
    padding: theme.spacing(1),
  },
}));

const CardContainer: React.FC<CardContainerProps> = ({
  inset,
  children,
  cardAction,
  cardContentStyle,
  cardStyle,
  cardLoading,
  cardBordered,
}) => {
  const classes = useStyles();
  return (
    <Card
      className={clsx([classes.card, cardStyle && cardStyle])}
      loading={cardLoading && cardLoading}
      bordered={cardBordered && cardBordered}
      inset={inset}
    >
      <CardContent className={cardContentStyle ? cardContentStyle : undefined}>{children}</CardContent>
      {cardAction && cardAction}
    </Card>
  );
};

export { CardContainer };
