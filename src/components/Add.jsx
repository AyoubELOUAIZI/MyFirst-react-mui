import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material';
import React, { useState } from 'react'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TodayIcon from '@mui/icons-material/Today';
const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up("sm")]: {
        display: 'flex',
    },
}));

export const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
                onClick={e => { setOpen(true); }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => { setOpen(false); }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={2} borderRadius={3}>
                    <Typography variant="h6" color="blue" textAlign="center"> Create Post</Typography>

                    <UserBox onClick={e => { setOpen(true) }} >
                        <Avatar sx={{ bgcolor: 'blue' }} >AE</Avatar>
                        <Typography variant="span" >Ayoub</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        placeholder="what are you thinking about?"
                        multiline
                        rows={3}
                        variant="standard"
                    />

                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <SentimentSatisfiedOutlinedIcon sx={{color:'orange'}} />
                        <VideoLibraryIcon sx={{ color: 'blue' }} />
                        <PersonAddIcon sx={{ color: 'red' }} />
                        <AddPhotoAlternateOutlinedIcon sx={{ color: 'green' }} />
                    </Stack>

                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{maxWidth:100,bgcolor:'violet'}}><TodayIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}
