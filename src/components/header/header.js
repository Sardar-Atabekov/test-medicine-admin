import React from "react";
import bell from "./../../assets/header/bell.svg";
import profile from "./../../assets/header/profile.svg";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="bell">
                <img src={bell} alt="bellImage" />
            </div>
            <div className="profileImage">
                <img src={profile} alt="bellImage" />
            </div>
        </header>
    );
}

export default Header;
