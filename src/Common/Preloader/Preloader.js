import preloader from "../../resources/Spin-0.9s-201px.svg";
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