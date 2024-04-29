import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    chooseLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});
export const { chooseLanguage } = configSlice.actions;
export default configSlice.reducer;
