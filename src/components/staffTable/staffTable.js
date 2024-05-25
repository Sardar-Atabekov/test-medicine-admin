import React, { useEffect, useState } from "react";
import { departmentNames, userPost } from "./../../constants/status"
import EditUser from "../editUser-block/editUser-block";
import CreateEmployee from "../create-user/create-user";
import DeleteBtn from "../buttons/deleteBtn";
import "./table.css";
const StaffTable = ({ data, setData, JsonData, tableName }) => {
    const [showData, setShowData] = useState(data);
    const [department, setDepartment] = useState("0");

    useEffect(() => {
        let filterData = data;
        if (department != "0") filterData = data.filter(item => item.department == department)
        setShowData(filterData);
    }, [data, department])


    const handleReset = () => {
        setDepartment('0');
        setShowData(JsonData);
        setData(JsonData);
        localStorage.setItem(`${tableName}Id`, JSON.stringify(5));
    };

    return (
        <div>
            <div className="actions-block">
                <select
                    value={department}
                    className="select form-control"
                    onChange={e => setDepartment(e.target.value)}
                >
                    <option value="0">Отделение</option>
                    <option value="1">Кардиологическое</option>
                    <option value="2">Хирургическое</option>
                </select>
                <input
                    type="submit"
                    className="btn"
                    value="Reset"
                    onClick={handleReset}
                />

                <CreateEmployee staffData={data} setStaffData={setData} tableName={tableName} />

            </div>
            <table className={"mb-5 table-3 tables"}>
                <thead>
                    <tr>
                        <th className={"thead-item"}>
                            <span>Ф. И. О.</span>
                        </th>
                        <th className={"thead-item"}>
                            <span>Отдел </span>
                        </th>
                        <th className={"thead-item "}>
                            <span>Должность </span>
                        </th>
                        <th className={"thead-item "} colSpan="2">
                            <span>Action </span>
                        </th>
                    </tr>
                </thead>
                <tbody className={"tbody"}>
                    {showData.length > 0 ? (
                        showData.map((user) => (
                            <tr key={user.id}>
                                <td data-th="name" className={"tbody-item user-name"}>
                                    {user.name} {user.surname} {user.patronymic}
                                </td>
                                <td data-th="department" className={"tbody-item"}>
                                    {departmentNames[user.department]}
                                </td>
                                <td data-th="role" className={"tbody-item"}>
                                    {userPost[user.post]}
                                </td>
                                <td
                                    data-th="Изменение"
                                    className={"tbody-item icon-action__block"}
                                >
                                    <EditUser usersData={data} setUsersData={setData} userId={user.id} tableName={tableName} />
                                </td>
                                <td
                                    data-th="Удаление"
                                    className={"tbody-item icon-action__block"}
                                >
                                    <DeleteBtn data={data} setData={setData} userId={user.id} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="no-filter-Data">
                            <td colSpan="9">Нет данных</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
};


export default StaffTable;
