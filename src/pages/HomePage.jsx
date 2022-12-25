import React, {useState} from 'react';
import {
    Box,
    Container,
    TextField,
    Typography
} from "@mui/material";
import SettingsForm from "../components/SettingsForm";

import "../assets/styles/components/container.scss"

const HomePage = () => {
    const [result, setResult] = useState('');

    return (
        <Container className="container" sx={{display: "flex"}}>
            <Box sx={{flex: 1}}>
                <Typography sx={{marginBottom: 1}} variant="h6" >Результат</Typography>
                <TextField
                    id="result"
                    multiline
                    rows={20}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    value={result}
                />
            </Box>
            <Box sx={{minWidth: 200}}>
                <Typography sx={{marginBottom: 1}} variant="h6" >Настройки</Typography>
                <SettingsForm setResult={setResult} />
            </Box>
        </Container>
    );
};

export default HomePage;