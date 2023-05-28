import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
    return (
        <Box bgcolor="" flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed' maxWidth={300}>
                <Typography variant="h6" fontWeight={100} mt={2} >Online Friendes</Typography>

                <AvatarGroup max={8}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Erevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Frevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Rrevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Grevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Arevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Wrevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Qrevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Prevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} mt={2}>Latest Photos</Typography>

                <ImageList cols={3} rowHeight={100} gap={6}>
                    <ImageListItem >
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg" alt="" />
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://dubaitraveladventure.com/wp-content/uploads/2018/11/img-world-of-adventure-dubai-Lost-Valley.jpg" alt="" />
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg" alt="" />
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>


                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" sx={{backgroundColor:'green'}} src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>


            </Box>
        </Box>
    )
}
