import { SxProps, Theme } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------

interface BasicCardProps extends CardProps {
  /**
   * Optional title for the card.
   */
  title?: string;
  /**
   * Optional actions to be included in the card.
   */
  cardActions?: React.ReactNode;
  /**
   * Style overrides for the card.
   */
  sx?: SxProps<Theme>;
  /**
   * Content of the card.
   */
  children: React.ReactNode;
}

/**
 * BasicCard Component
 *
 * This component is a wrapper around the Material-UI Card component.
 * It extends the CardProps from Material-UI and adds additional optional properties
 * like title, cardActions, and sx for styling.
 *
 * The component renders a Card with optional title, content, and actions.
 *
 * @param {BasicCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} A rendered Card component with optional title, content, and actions.
 */
export const BasicCard: React.FC<BasicCardProps> = ({
  title,
  children,
  cardActions,
  sx,
  ...rest
}) => {
  return (
    <Card sx={{ minWidth: 275, ...sx }} {...rest}>
      {title && <CardHeader title={title} />}
      <CardContent>{children}</CardContent>
      {cardActions && <CardActions>{cardActions}</CardActions>}
    </Card>
  );
};
