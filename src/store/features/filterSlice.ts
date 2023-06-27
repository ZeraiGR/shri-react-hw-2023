import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum Genre {
  DEFAULT = 'notselected',
  FANTASY = 'fantasy',
  HORROR = 'horror',
  ACTION = 'action',
  COMEDY = 'comedy'
}

export interface FilterState {
  name: string;
  genge: Genre;
}

const initialState: FilterState = {
  name: '',
  genge: Genre.DEFAULT,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setName: (state: FilterState, action: PayloadAction<string>) => {
          state.name = action.payload;
        },
        setGenre: (state: FilterState, action: PayloadAction<Genre>) => {
          state.genge = action.payload;
        }
    }
});

export const { setName, setGenre } = filterSlice.actions;

export default filterSlice.reducer;