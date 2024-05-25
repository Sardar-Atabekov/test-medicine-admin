import React from "react";
import "./main.css";
import Title from "../../components/title/title";
import JsonData from './../../data/data.json'
import StaffTable from "./../../components/staffTable/staffTable"
const Main = () => {

    return (
        <div className="main">
            <Title>Все сотрудники</Title>
            <StaffTable data={JsonData} />
        </div>
    );
};


export default Main;
