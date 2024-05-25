import React, { useState } from "react";
import Alert, { confirmAlert } from "../../functions/alert";
import editIcon from "./../../assets/icons/editIcon.svg";
import "./editUser-block.css"

const EditUser = ({ usersData, setUsersData, userId, tableName }) => {
    const [editData, setEditData] = useState({})
    const [editModal, setEditModal] = useState(false)

    console.log('usersData', usersData)
    const handleUpdate = () => {
        if (editModal) {
            setEditModal(false)
        } else {
            setEditModal(true)
            let user = usersData.find(item => item.id == userId);
            console.log('user', user)
            setEditData(user);
        }
    }
    const postUpdateData = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target),
            data = {
                id: editData.id
            };
        console.log(formData);
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (usersData.some(item => item.post == 1 && item.post == data.post && item.department == data.department)) {
            confirmAlert(`Может только 1 заведующий`)
        } else if (usersData.some(item => item.post == 3 && item.post == data.post && item.department == data.department)) {
            confirmAlert('Может быть только 1 старшая сестра')
        } else {
            let updateData = usersData.map(item => {
                if (item.id == data.id) item = data;
                return item;
            })
            console.log('updateData', updateData)
            setUsersData(updateData)
            handleUpdate();
            Alert('Данные о сотруднике обновлены')
        }
    };

    return (
        <>
            {
                editModal ? <div className={"overlay"}>
                    <div className={"dialog"}>
                        <form className="input-blocks pt-4" onSubmit={postUpdateData}>
                            <div className="form-group">
                                <label htmlFor="name">Имя </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    defaultValue={editData.name}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Фамилия  </label>
                                <input
                                    type="text"
                                    name="surname"
                                    className="form-control"
                                    id="surname"
                                    defaultValue={editData.surname}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="patronymic"> Отчество </label>
                                <input
                                    type="text"
                                    name="patronymic"
                                    className="form-control"
                                    defaultValue={editData.patronymic}
                                    id="patronymic"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department">Отдел</label>
                                <br />
                                <select
                                    id="department"
                                    className="select form-control"
                                    name="department"
                                    defaultValue={editData.department}
                                    required
                                >
                                    <option value="">
                                        Выберите отдел
                                    </option>
                                    <option value="1" >
                                        Кардиологический
                                    </option>
                                    <option value="2" >
                                        Хирургический
                                    </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="post">Должность</label>
                                <br />
                                <select
                                    id="post"
                                    className="select form-control"
                                    name="post"
                                    defaultValue={editData.post}
                                    required
                                >
                                    <option value="">
                                        Выберите должность
                                    </option>
                                    {tableName == "doctors" ? 
                                    <>
                                        <option value="1" >
                                            Заведующий
                                        </option>
                                        <option value="2" >
                                            Врач-специалист
                                        </option>
                                        </> :
                                        <>
                                            <option value="3" >
                                                Старшая сестра
                                            </option>
                                            <option value="4" >
                                                Медсестра
                                            </option>
                                            <option value="5" >
                                                Младшая сестра
                                            </option>
                                        </>

                                    }
                                </select>
                            </div>
                            <div className="add-block">
                                <input
                                    type="submit"
                                    className="btn add-btn"
                                    value="Обновить "
                                />
                            </div>
                        </form>
                        <div className="xBtn" onClick={handleUpdate}>

                        </div>
                    </div>
                </div> : <img src={editIcon} alt="editIcon" onClick={handleUpdate} />
            }
        </>

    );
};

export default EditUser;
