import React from 'react';
import {useFormik} from "formik";
import {Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";

const SettingsForm = ({setResult}) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            sex: "female",
        },
        onSubmit: values => {
            setResult(values.name)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1, width: "100%"}}>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <FormControl>
                    <FormLabel id="sex">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="sex"
                        name="sex"
                        value={formik.values.sex}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <Button type="submit" variant="contained">Submit</Button>
            </Box>
        </form>
    );
};

export default SettingsForm;