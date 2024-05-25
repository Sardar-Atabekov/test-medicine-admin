import React from "react";
import Alert, { deleteAlert } from "../../functions/alert";
import Swal from "sweetalert2";
import deleteIcon from "./../../assets/icons/deleteIcon.svg";
import "./buttons.css";

const DeleteBtn = ({ data, setData, userId }) => {
    const deleteMessage = () => {
        Swal.fire({
            title: 'Вы точно хотите удалить данные этого сотрудника?',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#32b482",
            cancelButtonText: "Отмена",
            confirmButtonText: "Удалить",
        }).then((result) => {
            console.log(data, userId)
            if (result.value) {
                let filterData = data;
                filterData = data.filter(item => item.id != userId)
                console.log(filterData, userId)
                Alert('Данные сотрудника удалены')
                setData(filterData);
            }
        });
    };

    return (
        <div className="delete-btn-block">
            <img
                src={deleteIcon}
                alt="deleteIcon"
                onClick={deleteMessage}
            />
        </div>
    );
};
export default DeleteBtn;
