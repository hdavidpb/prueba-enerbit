import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./interface";
const initialState: InitialState = {
  showModal: false,
};

const commonSlice = createSlice({
  name: "common-slice",
  initialState,
  reducers: {
    handleChangeShowModal: (
      state,
      action: PayloadAction<{ show?: boolean }>
    ) => {
      if (action.payload.show !== undefined) {
        state.showModal = action.payload.show!;
        return;
      }
      state.showModal = !state.showModal;
    },
  },
});

export default commonSlice.reducer;
export const { handleChangeShowModal } = commonSlice.actions;
