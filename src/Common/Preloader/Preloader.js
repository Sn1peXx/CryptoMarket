import preloader from "../../resources/Double Ring-2.6s-200px.svg";
import React from "react";

import '../../Component/App/App.css'

const Preloader = () => {
    return (
        <div className="loading_block">
            <img src={preloader} className="loading" alt="loading"/>
        </div>
    )
}

export default Preloader;