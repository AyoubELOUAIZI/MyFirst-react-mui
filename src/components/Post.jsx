import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton } from '@mui/material'

import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Post = () => {
    return (
        <div>
            <Card sx={{m:3}} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Ayoub ML"
                    subheader="September 14, 2023"
                />
                <CardMedia
                    component="img"
                    height="500"
                    image="https://w0.peakpx.com/wallpaper/275/732/HD-wallpaper-nice-nice.jpg"
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
                        <Checkbox icon={<FavoriteBorder sx={{ color: 'red' }} />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />

                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon sx={{ color: 'red' }} />
                    </IconButton>
                    {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
                </CardActions>
            </Card>
        </div>
    )
}
