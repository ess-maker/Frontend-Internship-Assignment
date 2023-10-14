import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {charteredAccountants } from '../type';

interface CounterState {
    data: charteredAccountants[],
    loading:boolean,
    error: string | null;
  }
  
  const initialState: CounterState = {
    data:[],
    loading:false,
    error: null,
  }

  export const fetchCharteredAccountants = createAsyncThunk(
    'chartered/fetchAccountants',
    async () => {
      try {
        const response = await fetch(`http://localhost:3000/charteredAccountants`);
        if (!response.ok) {
          throw new Error('Failed to fetch chartered accountants.');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error: any) {
        throw new Error(error.message);
      }
    }
  );

const fetchcharteredsSlice = createSlice({
name: 'chartered',
initialState,
reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchCharteredAccountants.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchCharteredAccountants.fulfilled, (state, action:PayloadAction<charteredAccountants[]>): void => {
        state.data = action.payload;
        state.loading = false;
    })
    .addCase(fetchCharteredAccountants.rejected, (state , action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch chartered accountants.';
    });
},
});

export default fetchcharteredsSlice.reducer;