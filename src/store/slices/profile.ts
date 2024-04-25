import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  profile: boolean;
}

const initialState: InitialState = {
  profile: true,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

// export const {} = profileSlice.actions;
export default profileSlice.reducer;
