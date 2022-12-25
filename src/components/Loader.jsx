import React from 'react';
import {Oval} from "react-loader-spinner";

const Loader = () => {
    return (
        <Oval
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
    );
};

export default Loader;