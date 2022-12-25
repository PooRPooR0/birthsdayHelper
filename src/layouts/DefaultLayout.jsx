import React from 'react';
import Header from "../components/Header";
import {Box} from "@mui/material";

const DefaultLayout = ({pageTitle = "", children}) => {
    return (
        <div>
            <Header title={pageTitle} />
            <Box sx={{paddingTop: 2}}>
                {children}
            </Box>
        </div>
    );
};

export default DefaultLayout;