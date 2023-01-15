import toast from "react-hot-toast";

export const succesAlert = (msg: string) => {
  toast.success(msg);
};

export const errorAlert = (msg: string) => {
  toast.error(msg);
};
