import Swal from "sweetalert2";

function Alert(
  title,
  icon = "success",
  confirmBtnColor = "#32b482",
  time = 1000
) {
  return Swal.fire({
    showConfirmButton: true,
    icon: icon,
    width: 500,
    title: title,
    timer: time,
    confirmButtonColor: confirmBtnColor,
  });
}

function confirmAlert(title) {
  Swal.fire({
    width: 500,
    height: 500,
    showConfirmButton: true,
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "#32b482",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "ОК",
    title: title,
  })
}


const deleteAlert = () => {
  Swal.fire({
    title: 'Вы точно хотите удалить данные этого сотрудника?',
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#32b482",
    cancelButtonText: "Отмена",
    confirmButtonText: "Удалить",
  }).then((result) => {
    if (result.value) {
    alert('result.value', result.value)
    }
  });
};
export { deleteAlert, confirmAlert };
export default Alert;
