import React, { useEffect, useState } from "react";
import Title from "../../components/title/title";
import DoctorsData from './../../data/doctors.json'
import StaffTable from "./../../components/staffTable/staffTable"

const DoctorsPage = () => {
    let localData = JSON.parse(localStorage.getItem('doctors'))

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        if (localData) {
            setDoctors(localData);
        } else {
            localStorage.setItem("doctors", JSON.stringify(DoctorsData));
            localStorage.setItem("doctorsId", JSON.stringify(5))
            setDoctors(DoctorsData)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("doctors", JSON.stringify(doctors));
    }, [doctors]);

    return (
        <div className="main doctors">
            <Title>Врачи</Title>
            <StaffTable data={doctors} setData={setDoctors} JsonData={DoctorsData} table="doctors"/>
        </div>
    );
};


export default DoctorsPage;
