import React, { useState } from "react";
import Alert, { confirmAlert } from "../../functions/alert";

function CreateEmployee({ staffData, setStaffData, tableName }) {
    const [editModal, setEditModal] = useState(false);

    const handleModal = () => {
        if (editModal) {
            setEditModal(false)
        } else {
            setEditModal(true)
        }
    }

    const postUserData = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target),
            data = {}, id;
        console.log(formData);
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (staffData.some(item => item.post == 1 && item.post == data.post && item.department == data.department)) {
            confirmAlert('Может быть только 1 заведующий')
        } else if (staffData.some(item => item.post == 3 && item.post == data.post && item.department == data.department)) {
            confirmAlert('Может быть только 1 старшая сестра')
        } else {
            id = JSON.parse(localStorage.getItem(`${tableName}Id`)) + 1;
            localStorage.setItem(`${tableName}Id`, JSON.stringify(id));
            data.id = id;
            setStaffData([...staffData, data])
            Alert('Данные о сотруднике добавлены ')
            handleModal()
        }

    };

    return (
        <>
            {editModal ? <div className={"overlay"}>
                <div className={"dialog"}>
                    <form className="input-blocks pt-4" onSubmit={postUserData}>
                        <div className="form-group">
                            <label htmlFor="name">Имя </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
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
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patronymic"> Отчество </label>
                            <input
                                type="text"
                                name="patronymic"
                                className="form-control"
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
                                required
                            >
                                <option value="">
                                    Выберите должность
                                </option>
                                {

                                    tableName == "doctors" ? <>
                                        <option value="1" >
                                            Заведующий
                                        </option>
                                        <option value="2" >
                                            Врач-специалист
                                        </option></> :
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
                                value="Добавить"
                            />
                        </div>
                    </form>
                    <div className="xBtn" onClick={handleModal}>

                    </div>
                </div></div> :
                <input
                    type="submit"
                    className="add-btn"
                    onClick={handleModal}
                    value="Добавить"
                />
            }
        </>
    );
};

export default CreateEmployee;
