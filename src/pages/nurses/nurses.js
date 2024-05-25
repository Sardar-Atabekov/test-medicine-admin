import React, { useEffect, useState } from "react";
import Title from "../../components/title/title";
import NursesData from './../../data/nurses.json'
import StaffTable from "./../../components/staffTable/staffTable"
const NursesPage = () => {
    
    let localData = JSON.parse(localStorage.getItem('nurses'))
    const [nurses, setNurses] = useState([])

    useEffect(() => {
    
        if (localData) {
            setNurses(localData);
        } else {
            localStorage.setItem("nurses", JSON.stringify(NursesData));
            localStorage.setItem("nursesId", JSON.stringify(5))
            setNurses(NursesData)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("nurses", JSON.stringify(nurses));
    }, [nurses]);

    return (
         <div className="main nurses">
         <Title>Медсестры</Title>
         <StaffTable data={nurses} setData={setNurses} JsonData={NursesData} tableName="nurses"/>
     </div>
    );
};


export default NursesPage;


