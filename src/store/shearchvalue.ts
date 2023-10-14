import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ValueSearch {
  value: string;
}

const initialState: ValueSearch = {
  value: "",
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;