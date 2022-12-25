import React, {useState} from 'react';
import {useFormik} from "formik";
import {Box, Button, TextField} from "@mui/material";
import {generateCongratulation} from "../controllers/settingsFormController";
import Loader from "./Loader";

const SettingsForm = ({setResult}) => {
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: async values => {
            setIsLoading(true)
            const congratulation = await generateCongratulation(values.name)
            setResult(congratulation)
            setIsLoading(false)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1, width: "100%"}}>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Имя"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {!isLoading ?
                    <Button type="submit" variant="contained">Сгенерировать</Button>
                    : <Loader/>
                }

            </Box>
        </form>
    );
};

export default SettingsForm;