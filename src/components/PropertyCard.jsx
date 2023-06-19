import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
