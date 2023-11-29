import { SxProps, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------

interface BasicCardProps {
  title?: string;
  cardContent: React.ReactNode;
  cardActions?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const BasicCard: React.FC<BasicCardProps> = ({
  title,
  cardContent,
  cardActions,
  sx
}) => {
  return (
    <Card sx={{ minWidth: 275, ...sx }}>
      {title && <CardHeader title={title} />}
      <CardContent>{cardContent}</CardContent>
      {cardActions && <CardActions>{cardActions}</CardActions>}
    </Card>
  );
};
