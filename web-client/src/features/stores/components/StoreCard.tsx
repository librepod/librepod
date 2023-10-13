import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type StoreCardProps = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const StoreCard = ({ id, name, description, icon }: StoreCardProps) => {
  return (
    <Card sx={{ maxWidth: 375, maxHeight: 375 }}>
      <CardMedia
        component="img"
        alt={name}
        height={200}
        width={200}
        image="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/adguard-home.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};
