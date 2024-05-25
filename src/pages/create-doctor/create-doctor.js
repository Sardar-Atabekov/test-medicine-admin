import React, { useState } from "react";
import Title from "../../components/title/title";
import { useLocation } from "react-router-dom";
import Alert, { confirmAlert } from "../../functions/alert";
import "./create-doctor.css";
function CreateEmployee() {
    let listData = JSON.parse(localStorage.getItem("doctors"));
  
    const postUserData = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target),
            data = {}, id;
        console.log(formData);
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (listData.some(item => item.post == 1 && item.post == data.post && item.department == data.department)) {
            confirmAlert('Может быть только 1 заведующий')
        } else {
            id = JSON.parse(localStorage.getItem("id")) + 1;
            localStorage.setItem("id", JSON.stringify(id));
            data.id = id;
            listData.push(data);
            localStorage.setItem("doctors", JSON.stringify(listData));
            Alert('Добавлены данные о сотруднике')
        }

    };

    return (
        <div className="wrapper create-user">
            <Title>Создание пользователя </Title>
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
                    <label htmlFor="patronymic"> О. </label>
                    <input
                        type="text"
                        name="patronymic"
                        className="form-control"
                        id="patronymic"
                        required
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
                        <option value="1" >
                            Заведующий
                        </option>
                        <option value="2" >
                            Врач-специалист
                        </option>
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
        </div>
    );
};
export default CreateEmployee;
