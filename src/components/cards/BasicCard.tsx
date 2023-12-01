import { SxProps, Theme } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------

interface BasicCardProps extends CardProps {
  title?: string;
  cardActions?: React.ReactNode;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

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
