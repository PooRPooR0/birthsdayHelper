import React, {useState} from 'react';
import {useFormik} from "formik";
import {Box, Button, TextField} from "@mui/material";
import axios from "axios";
import {Oval} from "react-loader-spinner";

const SettingsForm = ({setResult}) => {
    const [isLoading, setIsLoading] = useState(false)
    const generateCongrat = async (name) => {
        const response = await axios.post("https://zeapi.yandex.net/lab/api/yalm/text3", {
            "filter": 1,
            "into": 0,
            "query": `${name}, поздравляем с днем рождения!`
        }, {
            'Content-Type': 'application/json'
        })

        return response.data.query + response.data.text
    }

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: async values => {
            setIsLoading(true)
            const congrat = await generateCongrat(values.name)
            setResult(congrat)
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
                    : <Oval
                        height={40}
                        width={40}
                        color="#1976d2"
                        wrapperStyle={{justifyContent: "center"}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#1976d2"
                        strokeWidth={2}
                        strokeWidthSecondary={5}
                    />
                }

            </Box>
        </form>
    );
};

export default SettingsForm;