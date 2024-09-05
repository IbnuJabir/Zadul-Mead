import { RegistrationState } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RegistrationState = {
  registrationRef: "",
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegRef: (state, action: PayloadAction<string>) => {
      state.registrationRef = action.payload;
    },
    setRegError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setRegRef, setRegError } = registerSlice.actions;

export default registerSlice.reducer;
