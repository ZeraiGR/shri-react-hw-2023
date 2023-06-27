import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartState = Record<string, number>;

const initialState: CartState = {
    "2aT976Fs_Bek0e2ZR_05V": 10,
    "9t2dPgRBgWpmOXRXK5l4Q": 14,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (
          state: CartState, 
          action: PayloadAction<string>
        ) => {
            const id = action.payload;

            if (id in state) {
                const quantity = state[id];
                state[id] = quantity + 1;
            } else {
                state[id] = 1;
            }
        },
        decrement: (state: CartState, action: PayloadAction<string>) => {
            const id = action.payload;

            if (!(id in state)) {
                return;
            }

            if (state[id] === 1) {
                delete state[id];
                return;
            }

            const quantity = state[id];
            state[id] = quantity - 1;
        },
        reset: (state: CartState, action: PayloadAction<string>) => {
            const id = action.payload;

            if (!(id in state)) {
                return;
            }

            delete state[id];
        }
    }
});

export const { increment, decrement, reset } = cartSlice.actions;

export default cartSlice.reducer;
