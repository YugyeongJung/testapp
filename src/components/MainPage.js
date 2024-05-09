import Stack from '@mui/material/Stack';
import React from "react";
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from '@mui/material';



export default function MainPage() {
    const navigate = useNavigate();


    const handleWithinPage = () => {
        navigate("/Within")
    }
    return(
        <div>
            <Stack direction = 'column'>
                <Stack direction = 'row'>
                    <h1 style={{fontSize: 20, marginTop: 1, marginLeft: 7, color: 'black'}}>Video/Map View</h1>
                </Stack>
                <h1>MainPage</h1>
                    <Button onClick = {handleWithinPage}>Open Within</Button>

            </Stack>  
        </div>
    )
}