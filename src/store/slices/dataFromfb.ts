import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DataState {
    data: any[];
}

const initialState: DataState = {
    data: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addData(state, action: PayloadAction<any[]>) {
            state.data = [...state.data, ...action.payload];
        },
    },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
