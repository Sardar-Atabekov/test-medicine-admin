import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const NotFound = () => {
    return (
        <div>
            <div className="NotFound">
                <div className="nf_block">
                    <p className="nf_p">Страница в процессе разработки...</p>
                    <Link to="/doctors/">
                        <button className="nf_button">На главную</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default NotFound;