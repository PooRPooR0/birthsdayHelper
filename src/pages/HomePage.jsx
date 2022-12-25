import React, {useState} from 'react';
import {
    Box,
    Container,
    TextField,
    Typography
} from "@mui/material";
import SettingsForm from "../components/SettingsForm";

const HomePage = () => {
    const [result, setResult] = useState('');

    return (
        <Container sx={{display: "flex", gap: 2}}>
            <Box sx={{flex: 1}}>
                <Typography variant="h6" >Your congratulation</Typography>
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
                <Typography variant="h6" >Settings</Typography>
                <SettingsForm setResult={setResult} />
            </Box>
        </Container>
    );
};

export default HomePage;