import { DialogState } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:DialogState = {
  successDialog: false,
  errorDialog: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openSuccessDialog: (state) => {
      state.successDialog = true;
    },
    closeSuccessDialog: (state) => {
      state.successDialog = false;
    },
    openErrorDialog: (state) => {
      state.errorDialog = true;
    },
    closeErrorDialog: (state) => {
      state.errorDialog = false;
    },
  },
});

export const {
  openSuccessDialog,
  closeSuccessDialog,
  openErrorDialog,
  closeErrorDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;
