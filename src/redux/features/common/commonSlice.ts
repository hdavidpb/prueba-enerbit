import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interface";
const initialState: InitialState = {
  showModal: true,
};

const commonSlice = createSlice({
  name: "common-slice",
  initialState,
  reducers: {
    handleChangeShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export default commonSlice.reducer;
export const { handleChangeShowModal } = commonSlice.actions;
