import Stack from '@mui/material/Stack';
import React from "react";
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from '@mui/material';


export default function Within() {
    const navigate = useNavigate();


    const handleBetweenPage = () => {
        navigate("/Between")
    }
    return(
        <div>
            <Stack direction = 'column'>
                <Stack direction = 'row'>
                    <h1 style={{fontSize: 20, marginTop: 1, marginLeft: 7, color: 'black'}}>Video/Map View</h1>
                </Stack>
             
                    <ReactPlayer
                        url={'https://www.youtube.com/embed/KmBPT9MRbz4?si=qfHBDw_139BxGYYG'}
                        playing={false}  
                        muted={true} 
                        controls={true} 
                        light={false} 
                        pip={true} 
                        width="100%"
                    />
                    <Button onClick = {handleBetweenPage}>Open Between</Button>

            </Stack>  
        </div>
    )
}