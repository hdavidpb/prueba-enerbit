import toast from "react-hot-toast";

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const succesAlert = (msg: string) => {
  toast.success(msg);
};

export const errorAlert = (msg: string) => {
  toast.error(msg);
};

export const getFullDate = (date: string) => {
  const fullDate = new Date(date);
  const year = fullDate.getFullYear();
  const month = `${fullDate.getMonth() + 1}`.padEnd(2, "0");
  const day = fullDate.getDate();
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();
  const second = fullDate.getSeconds();

  return `${year}-${month}-${day}  ${hour}:${minute}:${second}`;
};
